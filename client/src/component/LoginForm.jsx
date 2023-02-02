import React, { useState } from 'react';
import { Button, Form, Row, Col, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    const emailForm = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (emailForm.test(email) == false) {
      console.log('invalide Email Address');
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
    validatePassword(form.password, form.confirmPassword);
  };

  const handleSubmit = () => {
    const formData = { email, password };
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
          <br />

          <div className="d-grid gap-1">
            <Button variant="primary" type="submit">
              Sign In
            </Button>
            <Button variant="secondary" type="submit">
              <Nav.Link href="/register">회원 가입하기</Nav.Link>
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default LoginForm;
