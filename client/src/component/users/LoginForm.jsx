import React, { useState } from 'react';
import { Button, Form, Row, Col, Container, Nav } from 'react-bootstrap';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    console.log('check');
    axios
      .post(`http://localhost:3001/api/auth/login`, userData)
      .then((res) => {
        const { accessToken } = res.data;
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${accessToken}`;
      })
      .catch(() => console.log('error'));
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
              <Form.Control
                type="id"
                placeholder="UserID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Col sm>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Form.Group>
          <br />
          <div className="d-grid gap-1">
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              로그인
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
