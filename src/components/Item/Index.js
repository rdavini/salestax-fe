import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import CurrencyBtn from './CurrencyBtn';
import Export from './Export';
import Table from './Table'

const styles = {
    back: {
        float: 'left',
        color: 'blue'
    },
    title: {
        textAlign: 'left',
        marginLeft: 50,
        float: 'left'
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
    const [currency, setCurrency] = useState('EUR')

    const getItems = () => {
        api.api_sales_tax_get_items().then(rs =>{
            setItems(rs.data[0]["items"])
            setTotalCost( rs.data[0]["total_info"].total_cost )
            setTotalTax( rs.data[0]["total_info"].total_tax )
        }).catch((err)=>console.log(err))
    }

    useEffect(()=>{
        getItems();
    }, [])

    return <div>
            {
                (items.length > 0  && totalCost && totalTax)?
                <div>
                    <h2 style={styles.title}>Receipt</h2>
                    <Export header={headers} items={items} totalCost={totalCost} totalTax={totalTax} />
                    <CurrencyBtn items={items} setItems={setItems} currency={currency} setCurrency={setCurrency}/>
                    <Table items={items} totalCost={totalCost} totalTax={totalTax} currency={currency}/>
                </div>
                :
                'Loading items ...'
            }
            <span style={styles.back} className='offset-md-1' onClick={()=> setUrl('create')}>back</span>
        </div>
}

export default Index