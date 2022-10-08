import React, { useEffect, useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import api from '../../services/api'
import PropTypes from 'prop-types';

const styles={
    dropBtn: {
        marginTop: '1.5rem',
        float: 'right',
        clear: 'both'
    }
}

const CurrencyBtn = ({items, setItems, currency, setCurrency, setError, rate, setRate}) => {
    const [eurToInrRate, setEurToInrRate] = useState(null)
    const [eurToUsdRate, setEurToUsdRate] = useState(null)
    const [usdToEurRate, setUsdToEurRate] = useState(null)
    const [usdToInrRate, setUsdToInrRate] = useState(null)
    const [inrToEurRate, setInrToEurRate] = useState(null)
    const [inrToUsdRate, setInrToUsdRate] = useState(null)

    useEffect(()=>{
        // EUR -> INR, USD
        api.api_fixer_latest_rate('EUR', ['INR', 'USD']).then((res)=>{
            setEurToInrRate( res.data.rates.INR )
            setEurToUsdRate( res.data.rates.USD )
        }).catch((err)=> {
            console.log(err)
            setError("Rate conversion API error: "+err.response.data.message)
        })

        //USD -> EUR, INR
        api.api_fixer_latest_rate('USD', ['EUR', 'INR']).then((res)=>{
            setUsdToEurRate( res.data.rates.EUR )
            setUsdToInrRate( res.data.rates.INR )
        }).catch((err)=> {
            console.log(err)
            setError("Rate conversion API error: "+err.response.data.message)
        })

        //INR -> EUR, USD
        api.api_fixer_latest_rate('INR', ['EUR', 'USD']).then((res)=>{
            setInrToEurRate( res.data.rates.EUR )
            setInrToUsdRate( res.data.rates.USD )
        }).catch((err)=> {
            console.log(err)
            setError("Rate conversion API error: "+err.response.data.message)
        })
    }, [])

    useEffect(()=>{
        let temp_items = []
        if(rate!= 1){
            items.forEach(item =>{
                temp_items.push({
                    desc: item.desc,
                    price: (item.price*rate).toFixed(2),
                    qty: item.qty
                })
            })

            setItems(temp_items)
        }
    }, [rate])


    const handleSubmit = (new_currency) =>{
        switch(new_currency){
            case 'EUR':
                setRate(currency === 'INR' ? inrToEurRate : usdToEurRate)
                break
            case 'INR':
                setRate(currency === 'EUR' ? eurToInrRate : usdToInrRate)
                break
            case 'USD':
                setRate(currency === 'INR' ? inrToUsdRate : eurToUsdRate)
                break
        }

        setCurrency(new_currency)
    }

    return (
      <DropdownButton id="dropdown-basic-button" variant="light" title={currency} style={styles.dropBtn}>
        {currency === 'EUR' &&
        <div>
            <Dropdown.Item onClick={()=>handleSubmit('INR')}>INR</Dropdown.Item>
            <Dropdown.Item onClick={()=>handleSubmit('USD')}>USD</Dropdown.Item>
        </div>
        }
        {currency === 'USD' &&
        <div>
            <Dropdown.Item onClick={()=>handleSubmit('INR')}>INR</Dropdown.Item>
            <Dropdown.Item onClick={()=>handleSubmit('EUR')}>EUR</Dropdown.Item>
        </div>
        }
        {currency === 'INR' &&
        <div>
            <Dropdown.Item onClick={()=>handleSubmit('EUR')}>EUR</Dropdown.Item>
            <Dropdown.Item onClick={()=>handleSubmit('USD')}>USD</Dropdown.Item>
        </div>
        }
      </DropdownButton>
    );
}

CurrencyBtn.propTypes = {
    items: PropTypes.array.isRequired,
    setItems: PropTypes.func.isRequired,
    currency: PropTypes.string.isRequired,
    setCurrency: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
    rate: PropTypes.number.isRequired,
    setRate: PropTypes.func.isRequired
};


export default CurrencyBtn