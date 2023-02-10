import React, { useState } from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';
import instance from '../../util/axios-setting';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from 'mdb-react-ui-kit';

function UserWithdrawal() {
  const [isChecked, setIsChecked] = useState(false);
  const [password, setPassword] = useState('');

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('check');
    instance
      .delete(`/api/auth/withdrawal`, password)
      .then((res) => console.log(res.data))
      .catch(() => console.log('error'));
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <div className="text-center mb-4">
        <p>6TEAMSHOP을 이용해주셔서 감사했습니다</p>
      </div>
      <MDBInput
        wrapperClass="mb-4"
        label="비밀번호 입력"
        id="form1"
        type="email"
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox
          name="flexCheck"
          value=""
          id="flexCheckDefault"
          label="회원을 탈퇴하시겠습니까?"
          onClick={handleClick}
        />
        <a href="/main">홈으로 돌아가기</a>
      </div>
      {!isChecked ? (
        <Button variant="danger" size="lg" disabled>
          회원 탈퇴
        </Button>
      ) : (
        <Button variant="danger" size="lg" onClick={handleSubmit}>
          회원 탈퇴
        </Button>
      )}
    </MDBContainer>
  );
}

export default UserWithdrawal;
