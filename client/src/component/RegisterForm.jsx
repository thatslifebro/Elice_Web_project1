import React, { useState } from 'react';
import { Button, Form, Row, Col, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validateEmail = (email) => {
    const emailForm = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (emailForm.test(email) == false) {
      console.log('invalide Email Address');
      return false;
    }
    return true;
  };

  const validateName = (name) => {
    if (name.length < 1) {
      console.log('please input name');
      return false;
    }
    return true;
  };

  const validateAddress = (address) => {
    if (address.length < 1) {
      console.log('please input address');
      return false;
    }
    return true;
  };

  const validatePassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      console.log('password is not confirmed');
      return false;
    }
    return true;
  };

  const validateForm = (form) => {
    validateEmail(form.email);
    validateName(form.name);
    //validateAddress(form.address);
    validatePassword(form.password, form.confirmPassword);
  };

  const handleSubmit = () => {
    const formData = { email, name, address, password, confirmPassword };
    const inputStatus = validateForm(formData);
  };

  return (
    <div>
      <Container className="panel">
        <Form>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Col sm>
              <Form.Control type="password" placeholder="UserID" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Col sm>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Col sm>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Col sm>
              <Form.Control type="password" placeholder="Username" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
            <Col sm>
              <Form.Control type="email" placeholder="Email Address" />
            </Col>
          </Form.Group>
          <br />

          <div className="d-grid gap-1">
            <Button variant="primary" type="submit">
              회원가입
            </Button>
            <Button variant="secondary" type="submit">
              <Nav.Link href="/login">뒤로 가기</Nav.Link>
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default RegisterForm;
