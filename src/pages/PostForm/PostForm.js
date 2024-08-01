import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap';

const PostForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        department: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
      };
 
  return (
    <Container className="my-5">
              <h2>Employee Form</h2>
              <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                      type="text"
                      placeholder="Enter name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                  />
              </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formDepartment">
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter department"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
        </Form.Group>
        <br></br>
              <Button variant="primary" type="submit">
          Submit
        </Button>
                </Form>
    </Container>
  )
}

export default PostForm