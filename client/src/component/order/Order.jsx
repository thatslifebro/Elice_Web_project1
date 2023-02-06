import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import axios from 'axios';

function Order() {
  return (
    <>
      <Container>
        <div className="p-3 mb-3 bg-secondary text-white">
          <h1>주문 목록</h1>
        </div>
        <div className="mb-5">아래의 내역을 채워주세요</div>
        <div class="d-grid gap-2 col-9 mx-auto">
          <button class="btn btn-primary" type="button">
            구매하기
          </button>
        </div>
      </Container>
    </>
  );
}

export default Order;
