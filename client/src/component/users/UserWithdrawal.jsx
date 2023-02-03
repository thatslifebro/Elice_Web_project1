import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

// **** 비밀번호를 받고 체크박스를 체크해야 회원탈퇴 버튼이 작동하도록
// **** 비밀번호를 받을때 백엔드와 연결해서 validate를 먼저 하고 버튼을 누르면 탈퇴 api가 작동할지
// **** 아니면 버튼을 누를때 백엔드에서 비밀번호 validate를 한 후에 탈퇴 api를 작동할지 논의 필요

function UserWithdrawal() {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  };

  return (
    <div>
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
    </div>
  );
}

export default UserWithdrawal;
