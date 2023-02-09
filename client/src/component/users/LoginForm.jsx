import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Row, Col, Container, Nav } from 'react-bootstrap';
import axios from 'axios';
import { verifyTokken } from '../../util/verify';
import NavBar from '../main/NavBar';
import instance from '../../util/axios-setting';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState('NOTUSER');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    instance
      .post(`/api/auth/login`, userData)
      .then((res) => {
        localStorage.setItem('jwt', res.data);
      })
      .then(verifyTokken)
      .then((role) => {
        setAuth(role);
        navigate('/main');
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    verifyTokken().then(setAuth);
  }, []);
  return (
    <div className="container px-4 px-lg-3 my-5">
      <section className="py-5">
        {auth === 'NOTUSER' ? (
          <Container>
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
        ) : (
          <span>로그인된 사용자 입니다.</span>
        )}
      </section>
    </div>
  );
}

export default LoginForm;
