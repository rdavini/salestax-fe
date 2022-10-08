import React, { useState, useEffect } from 'react'
import { Col, Row, Form} from 'react-bootstrap';
import PropTypes from 'prop-types';

const ItemForm = ({itemsPayload, setItemsPayload, index}) => {  
    const [qty, setQty] = useState('')
    const [desc, setDesc] = useState('')
    const [price, setPrice] = useState('')

    const styles={
      floatL: {
        float: 'left'
      }
    }

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
      <Form.Label style={styles.floatL}>Qty</Form.Label>
      <Form.Control type="number" min="1" step="1" className='form-control' value={qty} onChange= { e => setQty(e.target.value)} />
    </Form.Group>
    </Col>
    <Col>
      <Form.Group controlId="formBasicDescription">
        <Form.Label style={styles.floatL}>Item Description</Form.Label>
        <Form.Control type="text" className='form-control' placeholder="Description" value={desc} onChange= { e => setDesc(e.target.value)} />
      </Form.Group>
    </Col>
    <Col>
      <Form.Group controlId="formBasicPrice">
        <Form.Label style={styles.floatL}>Shelf Price</Form.Label>
        <Form.Control type="number" min="0.01" step="0.01" className='form-control' placeholder="R$" value={price} onChange= { e => setPrice(e.target.value)}/>
      </Form.Group>
    </Col>
  </Row>
}

ItemForm.propTypes = {
  itemsPayload: PropTypes.array.isRequired,
  setItemsPayload: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default ItemForm