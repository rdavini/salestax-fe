import React, { useEffect, useState } from 'react'
import { BiEuro, BiDollar, BiRupee } from 'react-icons/bi';

const useCurrency = () => {    
    const [currency, setCurrency] = useState('EUR')
    const [currencyIcon, setCurrencyIcon] = useState(<BiEuro/>)
    useEffect(()=>{
        updateCurrencyIcon()
    }, [currency])
    
    const updateCurrencyIcon = () => {
        switch(currency){
            case 'EUR':
                setCurrencyIcon(<BiEuro/>)
                break;
            case 'INR':
                setCurrencyIcon(<BiRupee/>)
                break;
            case 'USD':
                setCurrencyIcon(<BiDollar/>)
                break;
            default:
                return 'Currency not available'
        }
    }

    return { currency, setCurrency, currencyIcon };
}

export default useCurrency
