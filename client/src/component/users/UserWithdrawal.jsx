import React, { useState } from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';

function UserWithdrawal() {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  };

  return (
    <div>
      <Container>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
          <Col sm>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </Col>
        </Form.Group>
        <Form className="mb-3">
          <Form.Check
            type="checkbox"
            label="회원을 탈퇴하시겠습니까?"
            onClick={handleClick}
          />
        </Form>
        {!isChecked ? (
          <Button variant="danger" size="lg" disabled>
            회원 탈퇴
          </Button>
        ) : (
          <Button variant="danger" size="lg">
            회원 탈퇴
          </Button>
        )}
      </Container>
    </div>
  );
}

export default UserWithdrawal;
