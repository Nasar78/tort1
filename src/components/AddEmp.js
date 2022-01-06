import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";

function AddEmp() {
  const initialValues = {
    fullname: "",
    designation: "",
    salary: "",
    age: "",
  };
  const [formValues, setformValues] = useState(initialValues);
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const clearField = () => {
    setformValues({
      fullname: "",
      designation: "",
      salary: "",
      age: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    setisSubmit(true);
    clearField();
  };

  useEffect(() => {
    // if (Object.keys(formErrors).length === 0 && isSubmit) {
    // }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    if (!values.fullname) {
      errors.fullname = "Please enter fullname!!!";
    } else if (!values.fullname.match(/^[a-zA-Z]+$/)) {
      errors.fullname = "Name must be in alphabetic character!!!";
    }
    if (!values.designation) {
      errors.designation = "Please enter designation!!!";
    } else if (!values.designation.match(/^[a-zA-Z]+$/)) {
      errors.designation = "Designation must be in alphabetic character!!!";
    }
    if (!values.salary) {
      errors.salary = "Please enter salary!!!";
    } else if (values.salary < 0) {
      errors.salary = "Enter valid salary!!!";
    }
    if (!values.age) {
      errors.age = "Please enter age!!!";
    } else if (values.age < 18) {
      errors.age = "Age must be greater than 18!!!";
    } else if (values.age > 80) {
      errors.age = "Age must be less than 80!!!";
    }
    return errors;
  };

  return (
    <>
      <div className="container my-5 w-25">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div>
            <Alert variant="success">
              <Alert.Heading>Employee Added Succesfully...!!!</Alert.Heading>
            </Alert>
          </div>
        ) : (
          <div></div>
        )}
        <Card>
          <Card.Header className="fs-4 fw-bold">Add Employee</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-2" controlId="formBasicFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  className="bg-light"
                  name="fullname"
                  placeholder="Enter fullname..."
                  value={formValues.fullname}
                  onChange={handleChange}
                />
              </Form.Group>
              <p className="text-danger">{formErrors.fullname}</p>
              <Form.Group className="mb-2" controlId="formBasicDesignation">
                <Form.Label className="">Designation</Form.Label>
                <Form.Control
                  type="text"
                  className="bg-light"
                  name="designation"
                  placeholder="Enter designation..."
                  value={formValues.designation}
                  onChange={handleChange}
                />
              </Form.Group>
              <p className="text-danger">{formErrors.designation}</p>
              <Form.Group className="mb-2" controlId="formBasicDesignation">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                  type="number"
                  className="bg-light"
                  placeholder="Enter salary..."
                  name="salary"
                  value={formValues.salary}
                  onChange={handleChange}
                />
              </Form.Group>
              <p className="text-danger">{formErrors.salary}</p>
              <Form.Group className="mb-2" controlId="formBasicDesignation">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  className="bg-light"
                  placeholder="Enter age..."
                  name="age"
                  value={formValues.age}
                  onChange={handleChange}
                />
              </Form.Group>
              <p className="text-danger">{formErrors.age}</p>
              <Button className="float-end" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default AddEmp;
