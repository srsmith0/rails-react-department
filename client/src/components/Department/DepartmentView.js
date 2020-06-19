import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Button } from 'semantic-ui-react';
import ItemList from '../ItemList'
import DepartmentForm from './DepartmentForm';


export default function DepartmentView (props) {
  const [department, setDepartment] = useState({})

  useEffect ( () => {
    Axios.get(`/api/departments/${props.match.params.id}`)
    .then((res) => {
      setDepartment(res.data)
    }).catch((err) => {
    console.log(err)
    })
  }, [] )

  const updateDepartment = (dep) => {
    Axios.put(`/api/departments/${department.id}`, dep )
    .then((res) => {
      setDepartment(res.data)
      });
  }
  
  return (
    <div>
      <h1>{department.name}</h1>
      <DepartmentForm edit={updateDepartment} {...department}/>
      <br />
      <ItemList departmentId={props.match.params.id}/>
      <br />
      <Button onClick={props.history.goBack} color="teal">Back</Button>
    </div>
  )
}