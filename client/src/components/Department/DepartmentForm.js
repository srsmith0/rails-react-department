import React, { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import Axios from 'axios';

export default function DepartmentForm (props) {
  const [name, setName] = useState ('');
  const [showForm, setShowForm] = useState(false);

  const department = {name: name}

  // useEffect(() => {
  //   // const {id, name} = props.location.state
  //   if (props.id)
  //   debugger;
  //   setName(props.name)

  // }, [])
  
  // const handleSubmit = (e) => {
  //   console.log("handleSubmit")
  //   debugger;
  //   if(props.id ? props.edit(department) : props.add(department))
  //   setName('');
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.id) {
      props.edit(department)
      toggleForm()
      setName('')
    } else {
    props.add(department)
    toggleForm()
    setName('')
    }
  };

  const toggleForm = (e) => {
    setShowForm(!showForm)
  }
  const handleChange = (e) =>{
    setName(e.target.value)
  }
  return (
    <Form >
      {showForm && <Form.Input 
      label= "Name"
      value= {name}
      placeholder="Department Name"
      onChange={handleChange}
      required />}
      <Form.Button color="Yellow" onClick={() => toggleForm()}>{showForm ? "Hide Form" : "Show Form" }</Form.Button>
      <Form.Button  onClick={handleSubmit} color="purple" >{props.id ? "Edit Department" : "Add Department"}</Form.Button>
    </Form>
  )
}