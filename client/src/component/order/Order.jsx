import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
import {
  Container,
  Form,
  FloatingLabel,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Component,
} from 'react-bootstrap';
import axios from 'axios';
import DaumPostcode from 'react-daum-postcode';
import Cart from './cart';
import instance from '../../util/axios-setting';

function Order() {
  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [zonecode, setZonecode] = useState('');
  const [postalAddress, setPostalAddress] = useState('');
  const [detailAddress, setdetailAddress] = useState('');
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };
  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem('items')));
    instance.get('/api/users/me').then((res) => {
      setUser(res.data);
      setName(res.data.fullName);
      setPostalAddress(res.data.address.address1);
      setZonecode(res.data.address.postalCode);
      setdetailAddress(res.data.address.address2);
    });
  }, []);

  const handleOrder = (e) => {
    e.preventDefault();
    if (products.length === 0) {
      return;
    }
    if (!zonecode || !postalAddress || !detailAddress || !name || !phone) {
      return;
    }

    const items = products.map((product) => {
      return {
        productId: product.productId,
        price: product.price,
        quantity: product.quantity,
      };
    });
    const address = {
      postalCode: zonecode,
      address1: postalAddress,
      address2: detailAddress,
      receiverName: name,
      receiverPhoneNumber: phone,
    };
    const data = {
      items,
      address,
    };
    instance.post('/api/orders', data).then((res) => {
      navigate('/orderComplete');
    });
  };

  return (
    <Container>
      <div className="cart">
        <section class="py-3">
          <div class="container px-4 px-lg-5 my-1">
            <div class="row">
              <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                <div class="table-responsive">
                  <Cart order={true} />
                  <Container>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <th scope="col" class="border-0 bg-light">
                          <div class="p-4 px-2 text-uppercase">
                            구매자 정보를 입력하세요
                          </div>
                        </th>
                        <Form class="p-1 px-2">
                          <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder={user.email}
                                disabled
                              />
                            </Form.Group>

                            <Form.Group
                              className="mb-3"
                              as={Col}
                              controlId="formGridPassword"
                            >
                              <Form.Label>구매자 이름</Form.Label>
                              <Form.Control
                                type="name"
                                placeholder="홍길동"
                                value={name}
                                onChange={(e) => {
                                  e.preventDefault();
                                  setName(e.target.value);
                                }}
                              />
                            </Form.Group>
                          </Row>
                          <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>휴대폰 번호</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="010xxxx4444"
                              className="mb-3"
                              value={phone}
                              onChange={(e) => {
                                e.preventDefault();
                                setPhone(e.target.value);
                              }}
                            />
                          </Form.Group>

                          <Form.Group
                            className="mb-3"
                            controlId="formGridAddress1"
                          >
                            <Form.Label>주소</Form.Label>
                            <div>
                              <Button
                                className="mb-1"
                                variant="secondary"
                                size="sm"
                                type="button"
                                onClick={openPostCode}
                              >
                                우편번호 검색
                              </Button>
                              <div id="popupDom">
                                {isPopupOpen && (
                                  <PopupDom>
                                    <PopupPostCode
                                      done={(data) => {
                                        setZonecode(data.zonecode);
                                        setPostalAddress(data.address);
                                      }}
                                    />
                                  </PopupDom>
                                )}
                                <Button onClick={closePostCode}>닫기</Button>
                              </div>
                            </div>
                            <Row>
                              <Col xs={3}>
                                <Form.Control
                                  placeholder="우편번호"
                                  value={zonecode}
                                  onChange={(e) => {
                                    e.preventDefault();
                                    setZonecode(e.target.value);
                                  }}
                                />
                              </Col>
                              <Col className="mb-1">
                                <Form.Control
                                  placeholder="주소"
                                  value={postalAddress}
                                  onChange={(e) => {
                                    e.preventDefault();
                                    setPostalAddress(e.target.value);
                                  }}
                                />
                              </Col>
                              <Form.Group
                                className="mb-3"
                                controlId="formGridAddress2"
                              >
                                <Form.Control
                                  className="mb-3"
                                  placeholder="상세주소"
                                  value={detailAddress}
                                  onChange={(e) => {
                                    e.preventDefault();
                                    setdetailAddress(e.target.value);
                                  }}
                                />
                              </Form.Group>
                            </Row>
                          </Form.Group>
                        </Form>
                      </Form.Group>
                      <Form.Label>요청사항</Form.Label>
                      <Form.Select
                        className="mb-3"
                        aria-label="Default select example"
                      >
                        <option>배송시 요청사항을 선택해주세요</option>
                        <option value="1">경비실에 맡겨주세요</option>
                        <option value="2">배송 시작 시 전화주세요</option>
                        <option value="3">(부재시)문앞으로 배송해주세요</option>
                        <option value="4">강아지가 뭅니다 조심하세요</option>
                      </Form.Select>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      ></Form.Group>
                    </Form>
                  </Container>
                </div>
              </div>
            </div>
            <a href="/orderComplete" class="d-grid gap-2 col-9 mx-auto">
              <button
                class="btn btn-dark rounded-pill py-2 d-md-block"
                type="button"
                onClick={handleOrder}
              >
                구매하기
              </button>
            </a>
          </div>
        </section>
      </div>
    </Container>
  );
}

export default Order;
