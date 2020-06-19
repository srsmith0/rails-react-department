import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Item, Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ItemForm from './Department/ItemForm';

const ItemList = ({departmentId}) => {
  const [items, setItems] = useState([])
  
  useEffect(() => { 
    getItems(departmentId)
  },[])
 

function getItems(id) {
  Axios.get(`/api/departments/${id}/items`)
  .then((res) => {
    console.log(res.data)
    setItems(res.data)
  }).catch((err) => {
    console.log(err)
  })
}

function addItem (item) {
    Axios.post(`/api/departments/${item.department_id}/items`, {item} )
    .then((res) => {
      setItems([res.data, ...items])
    }).catch((err) => {
      console.log(err)
    });
    
}

const renderItems= () => {
  return items.map((i) => (
    <Grid.Row>
    <Item key={`item-${i}`}>
      <Item.Content>
      <Item.Header as="h3">{i.name}</Item.Header>
      <Item.Meta as="h4">Price: ${i.price}</Item.Meta>
      <Item.Description>{i.description}</Item.Description>
      </Item.Content>
      <Button onClick={() => deleteItem(i.id)} color="red">Delete</Button>
      <Button as={Link} to={`api/departments/${i.department_id}/items/${i.id}`} color="sky blue" {...i}>Show Item</Button>
      </Item>
    </Grid.Row>
    
  ))
}

const deleteItem = (id) => {
  Axios.delete(`/api/departments/${departmentId}/items/${id}`)
  .then( res => {
    return setItems(items.filter((i) => i.id !== res.data.id))
  }).catch((err) => {
    console.log(err)
  });
}

  return (
    <div>
    <h1>Fanciful Items</h1>
    <br />
    <ItemForm add={addItem} dId={departmentId}/>
    <br />
    <Grid divided>
    {renderItems()}
    </Grid>
    </div>
  )
}

export default ItemList