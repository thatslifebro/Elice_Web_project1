import React from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';

function ChangePassword() {
  return (
    <div>
      <Container>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Col sm>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Col sm>
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="New Password" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Col sm>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Col>
          </Form.Group>

          <Button variant="primary" size="lg">
            수정하기
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default ChangePassword;
