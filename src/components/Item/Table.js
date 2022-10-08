import React from 'react'
import { Col, Row } from 'react-bootstrap';
import TotalInfo from './TotalInfo';
import PropTypes from 'prop-types';

const Table = ({items, totalCost, totalTax, currencyIcon}) => {
    return <div style={{clear: 'both'}}>
                <Row style={{borderBottom: 1, borderBottomStyle: 'solid'}}>
                    <Col><strong style={{float: 'left'}}>Qty</strong></Col>
                    <Col><strong style={{float: 'left'}}>Item Description</strong></Col>
                    <Col><strong style={{float: 'left'}}>Price</strong></Col>
                </Row>
                {items.map(it => {
                    return(
                        <Row>
                            <Col style={{textAlign: 'left'}}>{it.qty}</Col>
                            <Col style={{textAlign: 'left'}}>{it.desc}</Col>
                            <Col style={{textAlign: 'left'}}>
                                {currencyIcon}
                                {it.price}
                            </Col>
                        </Row>
                        )
                    })}
                <Row style={{borderTop: 1, borderTopStyle: 'solid'}}>
                    <TotalInfo totalTax={totalCost} total={totalTax} currencyIcon={currencyIcon}/>
                </Row> 
                </div>
}

Table.propTypes = {
    items: PropTypes.array.isRequired,
    totalCost: PropTypes.number.isRequired,
    totalTax: PropTypes.number.isRequired,
    currencyIcon: PropTypes.object.isRequired
};

export default Table