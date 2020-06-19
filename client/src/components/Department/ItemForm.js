import React, { useState } from 'react'
import { Form } from 'semantic-ui-react';

export default function ItemForm ({add, dId}) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const item = {name: name, price: price, description: description, department_id: dId}

  const handleSubmit = (e) => {
    e.preventDefault();
    add(item);
    setName('')
  //   if (props.id) {
  //     props.edit(item)
  //     setName('')
  //   // } else {
  //   // props.add(item)
  //   // setName('')
  //   // }
  // };
  }

  const handleChangeName = (e) =>{
    setName(e.target.value)
  }
  const handleChangePrice = (e) =>{
    setPrice(e.target.value)
  }
  const handleChangeDes = (e) =>{
    setDescription(e.target.value)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input 
      label= "Name"
      value= {name}
      placeholder="Department Name"
      onChange={handleChangeName}
      />
           <Form.Input 
      label= "Price"
      value= {price}
      placeholder="Item Price"
      onChange={handleChangePrice}
       />     <Form.Input 
      label= "Description"
      value= {description}
      placeholder="And description"
      onChange={handleChangeDes}
      />
      
      <Form.Button color="purple" >Add Item</Form.Button>
    </Form>
  )

}