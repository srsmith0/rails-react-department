import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Item, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DepartmentForm from './DepartmentForm';
import styled from 'styled-components';

export default function Department () {
  const [departments, setDepartments] = useState([])

  useEffect(() => {
    axios.get('/api/departments')
    .then((res) => {
      setDepartments(res.data)
    }).catch((err) => {
      console.log(err)
    });
  }, [])

function addDepartment (department) {
    axios.post("/api/departments", {department} )
    .then((res) => {
      setDepartments([res.data, ...departments])
    }).catch((err) => {
      console.log(err)
    });
    
}
// const updateDepartment = (department) => {
//   axios.put(`/api/departments/${department}`,{name: department })
//   .then((res) => {
//     const updated = departments.map(d => {
//       if(d.id !== res.data.id) return d 
//       return res.data
//     }).catch((err)=> {
//       console.log(err)
//     });
//     setDepartments(updated)
//   })
// }

const deleteDepartment = (id) => {
  axios.delete(`/api/departments/${id}`)
  .then( res => {
    return setDepartments(departments.filter((d) => d.id !== res.data.id))
  }).catch((err) => {
    console.log(err)
  });
}
  const renderContent = () => {
    return departments.map( d => ( 
    <StyledItem key={`department-${d.id}`} id={d.id} >
      <Item.Content>
        {d.name}
      </Item.Content>
      <Button as={Link} to={`departments/${d.id}`} color="brown"> View </Button>
      <Button onClick={() => deleteDepartment(d.id)} color="orange">Delete</Button>
    </StyledItem>
    ))
  }
  return (
    <>
   
    <br />
    <DepartmentForm add={addDepartment}/>
    <DepaBox>
    <HeaderText>Please Select a Department</HeaderText>

    <Item.Group divided style={{paddingTop: "15px"}}>
      {renderContent()}
    </Item.Group>
    </DepaBox>
    </>
  )
}

const HeaderText = styled.h1 `
  color: green;
  text-align: center;
  font-size: 40px ;
  font-family: 'Odibee Sans', cursive;
`
const DepaBox = styled.div `
  border: solid 2px grey;
  padding: 15px;
  margin-top: 20px;
  border-radius: 5%;
`
const StyledItem = styled(Item)`
  color: blue;
  font-size: 1.75em !important;
  font-family: 'Piedra', cursive;
`
