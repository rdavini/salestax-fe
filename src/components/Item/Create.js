import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Form} from 'react-bootstrap';
import api from '../../services/api'
import ItemForm from './ItemForm';

const Create = ({setUrl}) => {
  const [itemsPayload, setItemsPayload] = useState([{qty: '', desc: '', price: ''}])
  const [itemsRows, setItemsRows] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    setItemsRows([<ItemForm itemsPayload={itemsPayload} setItemsPayload={setItemsPayload} index={index}/>])
  }, [])

  const handleSubmit = () => {
    api.api_sales_tax_create_items(itemsPayload).then( () => {
      setUrl('index')
    }).catch((err) => console.log(err));
  }

  const addRow = () => {
    setItemsRows(itemsRows.concat(<ItemForm itemsPayload={itemsPayload} setItemsPayload={setItemsPayload} index={index+1}/>))
    setIndex(index+1)
  }

  return (
    <div class='container' style={{marginTop: 5}}>
      <h2 style={{textAlign: 'left'}}>Item Details</h2>
      <Form>
        {itemsRows}

        <Button onClick={addRow}>+</Button>
        <Button variant="primary" onClick={handleSubmit} style={{marginTop: 20, float: 'left'}}>
          Generate Receipt
        </Button>
      </Form>
    </div>
  );
}

export default Create;