import React, { useState } from 'react';
import { Button, Form, Row, Col, Container, Nav } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import instance from '../../util/axios-setting';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from 'mdb-react-ui-kit';

function RegisterForm() {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const validateEmail = () => {
    const emailForm = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (emailForm.test(email) == false) {
      setError('invalide Email Address');
      return false;
    }
    return true;
  };

  const validateName = () => {
    if (name.length < 1) {
      setError('please input name');
      return false;
    }
    return true;
  };

  const validateAddress = () => {
    if (address1.length < 1) {
      setError('please input address');
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setError('password is not confirmed');
      return false;
    }
    return true;
  };

  const validateForm = () => {
    return validateEmail() && validateName() && validatePassword();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      fullName: name,
      password,
    };
    const inputStatus = validateForm();
    if (inputStatus) {
      instance
        .post(`/api/auth/register`, userData)
        .then((res) => {
          console.log(res.data);
          alert('Register Success!');
          navigate('/main');
        })
        .catch(() => console.log('error'));
    } else {
      alert(error);
    }
  };
  return (
    <MDBContainer fluid>
      <MDBRow className="d-flex justify-content-center align-items-center">
        <MDBCol lg="8">
          <MDBCard className="my-5 rounded-3" style={{ maxWidth: '600px' }}>
            <MDBCardImage
              src="https://cdn.pixabay.com/photo/2016/11/29/05/07/breads-1867459_960_720.jpg"
              className="w-70 rounded-top"
              alt="Sample photo"
              height={'300'}
            />

            <MDBCardBody className="px-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">회원가입</h3>
              <MDBInput
                wrapperClass="mb-4"
                label="이메일"
                id="form1"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="datepicker mb-4"
                    label="비밀번호"
                    id="form2"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </MDBCol>

                <MDBCol md="6" className="mb-4">
                  <MDBInput
                    wrapperClass="datepicker mb-4"
                    label="비밀번호 재확인"
                    id="form2"
                    type="password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </MDBCol>
              </MDBRow>
              <MDBCol md="6">
                <MDBInput
                  wrapperClass="datepicker mb-4"
                  label="이름"
                  id="form2"
                  type="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </MDBCol>
              <Button className="mb-4" variant="secondary" size="lg">
                회원가입하기
              </Button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default RegisterForm;
