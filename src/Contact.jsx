import React from 'react';
import { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const Contact = () => {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    message: '',
  });

  const inputevent = (event) => {
    const { name, value } = event.target;
    setData((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone}. My email address is ${data.email}. And my message is ${data.message}`
    );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <Form onSubmit={formSubmit}>
              <Form.Group controlId="">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputevent}
                  placeholder="type your fullname"
                />
              </Form.Group>
              <Form.Group controlId="">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  name="phone"
                  value={data.phone}
                  onChange={inputevent}
                  placeholder="type your Phone number"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={inputevent}
                  placeholder="example@example.com"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  name="message"
                  value={data.message}
                  onChange={inputevent}
                  as="textarea"
                  rows={3}
                />
              </Form.Group>
              <Button variant="outline-primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
