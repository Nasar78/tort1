import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

function EditEmp() {
    return (
        <>
            <div className='container my-5 w-25'>
                <Card>
                    <Card.Header className='fs-4 fw-bold'>Edit Employee</Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group className="mb-2" controlId="formBasicFullName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicDesignation">
                                <Form.Label className=''>Designation</Form.Label>
                                <Form.Control type="text" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicDesignation">
                                <Form.Label>Salary</Form.Label>
                                <Form.Control type="number" placeholder="" />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicDesignation">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" placeholder="" />
                            </Form.Group>
                            <Button className='float-end' variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default EditEmp
