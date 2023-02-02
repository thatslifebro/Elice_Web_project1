import React, { useState } from 'react';
import { Button, Form, Row, Col, Container, Nav } from 'react-bootstrap';

function LoginForm() {
  const admin = {
    id: 'admin',
    password: 1234,
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    if (email !== admin.id) {
      setError('ID error');
      return false;
    }
    return true;
  };

  const validatePassword = (password, confirmPassword) => {
    if (password !== admin.password) {
      setError('password error');
      return false;
    }
    return true;
  };

  const validateForm = (form) => {
    validateEmail(form.email);
    validatePassword(form.password);
  };

  const handleSubmit = () => {
    const formData = { email, password };
    const inputStatus = validateForm(formData);
    if (!inputStatus) {
      alert(error);
    }
    setIsLogin(true);
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
        {isLogin && <h2>Login Success</h2>}
      </Container>
    </div>
  );
}

export default LoginForm;
