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
        <Row>
          <Col>
            <h3>배송정보</h3>
          </Col>
          <Col className="mb-5 .bg-light">
            핸드폰 번호: 010-1234-4567<br></br>
            구매자 성함: 엘리스<br></br>
            주소: 서울 강남구 1002-104<br></br>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>배송메모</h3>
          </Col>
          <Col className="mb-5 .bg-light">부재시 문앞으로 가져다주세요</Col>
        </Row>
        <Row className="mb-5 .bg-light">
          <Col>
            <h3>총 금액</h3>
          </Col>
          <Col>
            <h4>15,223원</h4>
          </Col>
        </Row>
        <div class="d-grid gap-2 col-9 mx-auto">
          <button class="btn btn-primary" type="button">
            상품 목록으로 돌아가기
          </button>
        </div>
      </Container>
    </>
  );
}

export default OrderComplete;
