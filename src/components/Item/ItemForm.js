import React, { useState, useEffect } from 'react'
import { Button, Col, Row, Form} from 'react-bootstrap';

const ItemForm = ({itemsPayload, setItemsPayload, index}) => {  
    const [qty, setQty] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')

    useEffect(()=>{
        setItemsPayload(itemsPayload.concat({qty: '', desc: '', price: ''}))
    }, [])

    useEffect(()=>{
        let new_row = {qty: qty, desc: desc, price: price}
        
        let temp = itemsPayload;
        temp[index] = new_row
        setItemsPayload(temp)
    }, [qty, desc, price])

    return <Row>
    <Col>
    <Form.Group controlId="formBasicQuantity">
      <Form.Label>Qty</Form.Label>
      <Form.Control type="text" className='form-control' value={qty} onChange= { e => setQty(e.target.value)} />
    </Form.Group>
    </Col>
    <Col xs={7}>
      <Form.Group controlId="formBasicDescription">
        <Form.Label>Item Description</Form.Label>
        <Form.Control type="text" className='form-control' placeholder="Description" value={desc} onChange= { e => setDesc(e.target.value)} />
      </Form.Group>
    </Col>
    <Col>
      <Form.Group controlId="formBasicPrice">
        <Form.Label>Shelf Price</Form.Label>
        <Form.Control type="text" className='form-control' placeholder="R$" value={price} onChange= { e => setPrice(e.target.value)}/>
      </Form.Group>
    </Col>
  </Row>
}

export default ItemForm