import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

import axios from 'axios';

function AdminOrder() {
  return (
    <Container fluid>
      <Row>
        <Col className="mb-2 ms-3 mr-5">
          <h1>관리자모드 주문 내역 (준비중)</h1>
          <Table striped bordered hover>
            <thead className="table-success">
              <tr>
                <th scope="col">#</th>
                <th scope="col">주문번호</th>
                <th scope="col">회원아이디</th>
                <th scope="col">총주문가격</th>
                <th scope="col">주문상품</th>
                <th scope="col">주문상태</th>
                <th scope="col">주문날짜</th>
              </tr>
            </thead>
            <tbody>
              {/* {orders.map((order) => {
                return (
                  <tr key={order._id} value={order._id}>
                    <td>{order._id}</td>
                    <td>{order.userId}</td>
                    <td>{order._id}</td>
                    <td>{order._id}</td>
                    <td>{order._id}</td>
                    <td>{order._id}</td>
                    <td>{order._id}</td>
                  </tr>
                );
              })} */}
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Thornton</td>
                <td>
                  <Button variant="success" size="sm">
                    발송
                  </Button>{' '}
                  <Button variant="secondary" size="sm">
                    취소
                  </Button>{' '}
                </td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Thornton</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@fat</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>{' '}
              <tr>
                <td>5</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>#</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
                <td colSpan={4}>Larry the Bird</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminOrder;
