import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { BiEuro, BiDollar, BiRupee } from 'react-icons/bi';
import TotalInfo from './TotalInfo';

const Table = ({items, totalCost, totalTax, currency}) => {
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

    return <div>
            {currencyIcon ?
                <div>
                <Row>
                    <Col>Qty</Col>
                    <Col>Item Description</Col>
                    <Col>Price</Col>
                </Row>
                {items.map(it => {
                    return(
                        <Row>
                            <Col>{it.qty}</Col>
                            <Col>{it.desc}</Col>
                            <Col>
                                {currencyIcon}
                                {it.price}
                            </Col>
                        </Row>
                        )
                    })}
                <Row>
                    <TotalInfo totalTax={totalCost} total={totalTax}/>
                </Row> 
                </div>
                : 'Loading icon ...'}
            </div>
}

export default Table