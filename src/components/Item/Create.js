import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Form} from 'react-bootstrap';
import api from '../../services/api'
import ItemForm from './ItemForm';

const Create = ({setUrl}) => {
  const [itemsPayload, setItemsPayload] = useState([{qty: '', desc: '', price: ''}])
  const [itemsRows, setItemsRows] = useState([])
  const [index, setIndex] = useState(0)

  const styles= {
    contentMarginTop: {
      marginTop: 50
    },
    floatL:{
      float: 'left'
    },
    alignL:{
      textAlign: 'left'
    },
    btnMarginTop:{
      marginTop: 30
    }
  }

  useEffect(()=>{
    setItemsRows([<ItemForm itemsPayload={itemsPayload} setItemsPayload={setItemsPayload} index={index} />])
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
    <div class='container' style={styles.contentMarginTop}>
      <h2 style={styles.alignL}>Item Details</h2>
      <Form>
        <div className='col-md-10' style={styles.floatL}>
          {itemsRows}
        </div>

        <Button style={styles.btnMarginTop} onClick={addRow}>+</Button>
        <div style={{clear: 'both', paddingTop: 20}}>
          <Button  variant="primary" onClick={handleSubmit}>
            Generate Receipt
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Create;