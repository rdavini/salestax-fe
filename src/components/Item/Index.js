import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import CurrencyBtn from './CurrencyBtn';
import Export from './Export';
import Table from './Table'
import useCurrency from '../../hooks/useCurrency'
import PropTypes from 'prop-types';

const styles = {
    back: {
        float: 'left',
        color: 'blue'
    },
    title: {
        textAlign: 'left',
        float: 'left',
        marginRight: 5
    }
}

const headers = [
    { title: 'Qty', prop: 'qty' },
    { title: 'Item Description', prop: 'desc' },
    { title: 'Price', prop: 'price' }
  ];

const Index = ({setUrl}) => {
    const [items, setItems] = useState([])
    const [totalCost, setTotalCost] = useState()
    const [totalTax, setTotalTax] = useState()
    const { currency, setCurrency, currencyIcon} = useCurrency()
    const [error, setError] = useState(null)
    const [rate, setRate] = useState(1)

    const getItems = () => {
        api.api_sales_tax_get_items().then(rs =>{
            setItems(rs.data)
        }).catch((err)=> {
            console.log(err)
            setError(err.response.message)
        })
    }

    const getTotalInfo = () => {
        api.api_sales_tax_total_info().then(rs => {
            setTotalCost( rs.data.total_cost )
            setTotalTax( rs.data.total_tax )
        }).catch((err)=>{
            console.log(err)
            setError(err.response.message)
        })
    }

    useEffect(()=>{
        if(rate != 1){
            setTotalCost((totalCost*rate).toFixed(2))
            setTotalTax((totalTax*rate).toFixed(2))
        }
    }, [rate])

    useEffect(()=>{
        getItems();
        getTotalInfo();
    }, [])

    return <div className='container col-md-8' style={{marginTop: 50}}>
            { error  &&
                <div className="alert alert-danger" role="alert">
                    { error }
                </div>
            }
            <br/>
            {
                items.length > 0 ?
                <div>
                    <h2 style={styles.title}>Receipt</h2>
                    <Export header={headers} items={items} totalCost={totalCost} totalTax={totalTax} currency={currency} />
                    <CurrencyBtn items={items} setItems={setItems} currency={currency} setCurrency={setCurrency} setError={setError} rate={rate} setRate={setRate}/>
                    <Table items={items} totalCost={totalCost} totalTax={totalTax} currencyIcon={currencyIcon} rate={rate}/>
                </div>
                :
                'Loading items ...'
            }
            <span style={styles.back} onClick={()=> setUrl('create')}>back</span>
        </div>
}

Index.propTypes = {
    setUrl: PropTypes.func.isRequired,
};

export default Index