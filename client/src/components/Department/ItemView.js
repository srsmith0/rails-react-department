import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Button } from 'semantic-ui-react';

export default function ItemView (props) {
const [item, setItem] = useState({})

useEffect(() => {
  Axios.get(`departments/api/departments/${props.department_id}/items/${props.id}`)
  .then((res) => {
    setItem(res.data)
  }).catch((err) => {
    console.log(err)
  })
}, [])

  return (
    <div>
    <h1>${item.name}</h1>
    <h3>Price: ${item.price}</h3>
    <p>Description: {item.description}</p>
    <Button onClick={props.history.goBack} color="teal">Back</Button>
    </div>
  )
};