import React, { useState } from 'react'
import { Button, Col, Row, Form} from 'react-bootstrap';
import api from '../../services/api'

const Create = ({setUrl}) => {
  const [qty, setQty] = useState('1')
  const [desc, setDesc] = useState('a')
  const [price, setPrice] = useState('1')

  const handleSubmit = () => {
    const new_item = {
      qty: qty,
      desc: desc,
      price: price
    } 
    
    api.api_sales_tax_create_items(new_item).then( () => {
      setUrl('index')
    }).catch((err) => console.log(err));
  }

  return (
    <div class='container' style={{marginTop: 5}}>
      <h2 style={{textAlign: 'left'}}>Item Details</h2>
      <Form>
        <Row>
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
        
        <Button variant="primary" onClick={handleSubmit} style={{marginTop: 20, float: 'left'}}>
          Generate Receipt
        </Button>
      </Form>
    </div>
  );
}

export default Create;