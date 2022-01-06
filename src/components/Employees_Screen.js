import React, { useState } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import EditEmp from './EditEmp'

const Employees_Screen = (props) => {
  
  const navigateTOEdit=()=>{
    props.history.push('/edit')
  }
    

   
    
    return (
        <div className='my-5'>

<Container>
  <Row>
    <Col>

    <Table  bordered  variant="dark">
 
  <tbody>
  <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Job</th>
      <th>Salary</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
    <tr>
      <td>test</td>
      <td>20</td>
      <td>qwtrty</td>
      <td>12345</td>
      <td> <Button variant="warning" onClick={()=>{
        navigateTOEdit()
      }}>Edit</Button>{' '}</td>
      <td> <Button variant="primary">Delete</Button>{' '}</td>
    </tr>
    <tr>
    <td>test</td>
      <td>20</td>
      <td>qwtrty</td>
      <td>12345</td>
      <td> <Button variant="warning">Edit</Button>{' '}</td>
      <td> <Button variant="primary">Delete</Button>{' '}</td>
    </tr>
    <tr>
    <td>test</td>
      <td>20</td>
      <td>qwtrty</td>
      <td>12345</td>
      <td> <Button variant="warning">Edit</Button>{' '}</td>
      <td> <Button variant="primary">Delete</Button>{' '}</td>
    </tr>
    <tr>
    <td>test</td>
      <td>20</td>
      <td>qwtrty</td>
      <td>12345</td>
      <td> <Button variant="warning">Edit</Button>{' '}</td>
      <td> <Button variant="primary">Delete</Button>{' '}</td>
    </tr>
  </tbody>
</Table>
    
    </Col>
  </Row>
  
</Container>

        </div>
    )
}

export default Employees_Screen
