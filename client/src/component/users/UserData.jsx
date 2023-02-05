import React from 'react';
import { Button, Form, Row, Col, Container, Nav } from 'react-bootstrap';

function UserData() {
  const testDB = {
    email: 'test@test.com',
    name: 'admin',
    address: 'test',
  };

  return (
    <div>
      <Container className="panel">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Col sm>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="id" placeholder={testDB.email} disabled />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Col sm>
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder={testDB.name} disabled />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Col sm>
              <Form.Label>Address</Form.Label>
              <Form.Control type="address" placeholder={testDB.address} />
            </Col>
          </Form.Group>
          <br />
          <Button variant="warning" size="lg">
            <Nav.Link href="/change-password">비밀번호 수정</Nav.Link>
          </Button>
          <br />
          <br />
          <br />
          <Button variant="secondary" size="lg">
            <Nav.Link href="/">주문내역 조회</Nav.Link>
          </Button>
          <br />
          <br />
          <br />

          <Button variant="danger" size="lg">
            <Nav.Link href="/user-withdrawal">회원 탈퇴</Nav.Link>
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default UserData;
