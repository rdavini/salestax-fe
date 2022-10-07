import React, { useEffect, useState } from 'react'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import api from '../../services/api'

const CurrencyBtn = ({items, setItems, currency, setCurrency}) => {
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
        }).catch((err)=> console.log(err))

        //USD -> EUR, INR
        api.api_fixer_latest_rate('USD', ['EUR', 'INR']).then((res)=>{
            setUsdToEurRate( res.data.rates.EUR )
            setUsdToInrRate( res.data.rates.INR )
        }).catch((err)=> console.log(err))

        //INR -> EUR, USD
        api.api_fixer_latest_rate('INR', ['EUR', 'USD']).then((res)=>{
            setInrToEurRate( res.data.rates.EUR )
            setInrToUsdRate( res.data.rates.USD )
        }).catch((err)=> console.log(err))
    }, [])

    const handleSubmit = (new_currency) =>{
        let temp_items = []
        let rate = 1;

        switch(new_currency){
            case 'EUR':
                rate = currency == 'INR' ? inrToEurRate : usdToEurRate
                break
            case 'INR':
                rate = currency == 'EUR' ? eurToInrRate : usdToInrRate
                break
            case 'USD':
                rate = currency == 'INR' ? inrToUsdRate : eurToUsdRate
                break
        }
        items.forEach(item =>{
            temp_items.push({
                desc: item.desc,
                price: item.price*rate,
                qty: item.qty
            })
        })

        setItems(temp_items)
        setCurrency(new_currency)
    }

    return (
      <DropdownButton id="dropdown-basic-button" variant="light" title={currency} style={{marginTop: '1.5rem'}}>
        {currency == 'EUR' && 
        <div>
            <Dropdown.Item href="#/action-2" onClick={()=>handleSubmit('INR')}>INR</Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={()=>handleSubmit('USD')}>USD</Dropdown.Item>
        </div>
        }
        {currency == 'USD' && 
        <div>
            <Dropdown.Item href="#/action-2" onClick={()=>handleSubmit('INR')}>INR</Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={()=>handleSubmit('EUR')}>EUR</Dropdown.Item>
        </div>
        }
        {currency == 'INR' && 
        <div>
            <Dropdown.Item href="#/action-2" onClick={()=>handleSubmit('EUR')}>EUR</Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={()=>handleSubmit('USD')}>USD</Dropdown.Item>
        </div>
        }
      </DropdownButton>
    );
}

export default CurrencyBtn