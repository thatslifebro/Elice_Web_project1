import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import axios from 'axios';

function OrderComplete() {
  return (
    <>
      <Container>
        <div className="p-3 mb-3 bg-secondary text-white">
          <h1>주문 완료</h1>
        </div>
        <div className="mb-5">주문해 주셔서 감사합니다.</div>
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
                              <div class="p-2 px-3 text-uppercase">
                                구매자 정보
                              </div>
                            </th>
                          </tr>
                          <tr>
                            <th scope="col" class="border-0 bg-light">
                              <div class="p-2 px-3 text-uppercase">이메일</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                              <div class="p-2 px-3 text-uppercase">주소</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                              <div class="p-2 px-3 text-uppercase">
                                휴대폰 번호
                              </div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                              <div class="p-2 px-3 text-uppercase">이름</div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="align-middle">
                              <h9>elice@gmail.com</h9>
                            </td>
                            <td class="align-middle">
                              <h9>서울특별시 강남구 132-112</h9>
                            </td>
                            <td class="align-middle">
                              <h9>010-1234-1234</h9>
                            </td>
                            <td class="align-middle">
                              <h9>엘리스</h9>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <a href="/main" class="d-grid gap-2 col-9 mx-auto">
                  <button
                    class="btn btn-dark rounded-pill py-2 d-md-block"
                    type="button"
                  >
                    상품 목록으로 가기
                  </button>
                </a>
              </div>
            </section>
          </div>
        </Container>
      </Container>
    </>
  );
}

export default OrderComplete;
