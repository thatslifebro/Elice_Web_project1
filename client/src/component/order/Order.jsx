import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

function Order() {
  // 팝업창 상태 관리
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // 팝업창 열기
  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };
  return (
    <Container>
      <div className="cart">
        <section class="py-3">
          <div class="container px-4 px-lg-5 my-1">
            <div class="row">
              <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col" class="border-0 bg-light">
                          <div class="p-2 px-3 text-uppercase">상품목록</div>
                        </th>
                        <th scope="col" class="border-0 bg-light">
                          <div class="py-2 text-uppercase">가격</div>
                        </th>
                        <th scope="col" class="border-0 bg-light">
                          <div class="py-2 text-uppercase">수량</div>
                        </th>
                        <th scope="col" class="border-0 bg-light">
                          <div class="py-2 text-uppercase">삭제하기</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" class="border-0">
                          <div class="p-2">
                            <img
                              src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg"
                              alt=""
                              width="70"
                              class="img-fluid rounded shadow-sm"
                            />
                            <div class="ms-3 d-inline-block align-middle">
                              <h5 class="mb-0">
                                {' '}
                                <a
                                  href="#"
                                  class="text-dark d-inline-block align-middle"
                                >
                                  딸기
                                </a>
                              </h5>
                            </div>
                          </div>
                        </th>
                        <td class="border-0 align-middle">
                          <strong>30,000 원</strong>
                        </td>
                        <td class="border-0 align-middle">
                          <strong>2 개</strong>
                        </td>
                        <td class="border-0 align-middle">
                          <a href="#" class="text-dark">
                            <i class="bi bi-trash">삭제</i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="p-2">
                            <img
                              src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg"
                              alt=""
                              width="70"
                              class="img-fluid rounded shadow-sm"
                            />
                            <div class="ms-3 d-inline-block align-middle">
                              <h5 class="mb-0">
                                <a href="#" class="text-dark d-inline-block">
                                  수박
                                </a>
                              </h5>
                            </div>
                          </div>
                        </th>
                        <td class="align-middle">
                          <strong>15,000 원</strong>
                        </td>
                        <td class="align-middle">
                          <strong>3 개</strong>
                        </td>
                        <td class="align-middle">
                          <a href="#" class="text-dark">
                            <i class="bi bi-trash">삭제</i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">
                          <div class="p-2">
                            <img
                              src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg"
                              alt=""
                              width="70"
                              class="img-fluid rounded shadow-sm"
                            />
                            <div class="ms-3 d-inline-block align-middle">
                              <h5 class="mb-0">
                                {' '}
                                <a href="#" class="text-dark d-inline-block">
                                  토마토
                                </a>
                              </h5>
                            </div>
                          </div>
                        </th>
                        <td class="align-middle">
                          <strong>100,00 원</strong>
                        </td>
                        <td class="align-middle">
                          <strong>3 개</strong>
                        </td>
                        <td class="align-middle">
                          <a href="#" class="text-dark">
                            <i class="bi bi-trash">삭제</i>
                          </a>
                        </td>
                      </tr>
                      <li class="d-flex justify-content-between px-2 py-3 border-bottom">
                        <strong class="text-muted">총 가격</strong>
                        <h5 class="fw-bold">55,000원</h5>
                      </li>
                    </tbody>
                  </table>
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
                                placeholder="Enter email"
                                disabled
                              />
                            </Form.Group>

                            <Form.Group
                              className="mb-3"
                              as={Col}
                              controlId="formGridPassword"
                            >
                              <Form.Label>구매자 이름</Form.Label>
                              <Form.Control type="name" placeholder="홍길동" />
                            </Form.Group>
                          </Row>
                          <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>휴대폰 번호</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="010xxxx4444"
                              className="mb-3"
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
                                    <PopupPostCode onClose={closePostCode} />
                                  </PopupDom>
                                )}
                              </div>
                            </div>
                            <Row>
                              <Col xs={3}>
                                <Form.Control placeholder="우편번호" />
                              </Col>
                              <Col className="mb-1">
                                <Form.Control placeholder="주소" />
                              </Col>
                              <Form.Group
                                className="mb-3"
                                controlId="formGridAddress2"
                              >
                                <Form.Control
                                  className="mb-3"
                                  placeholder="상세주소"
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
