import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Modal } from 'react-bootstrap';

import axios from 'axios';
import instance from '../../util/axios-setting';

function AdminOrder() {
  const [ordersList, setOrdersList] = useState([]);
  const [ordersUser, setOrdersUser] = useState([]);
  const [ordersProduct, setOrdersProduct] = useState([]);

  useEffect(() => {
    instance
      .get(`/api/orders/`)
      .then((res) => {
        setOrdersList(res.data);
      })

      .then(() => {
        instance.get(`/api/users/`).then((res) => {
          setOrdersUser(res.data);
        });
      })
      .then(() => {
        instance.get(`/api/products/`).then((res) => {
          setOrdersProduct(res.data);
        });
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, []);

  const onRowClick = (e) => {
    setLgShow(true);
  };

  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setLgShow(false);

  const objOrder = {
    header: [
      '#',
      '주문번호',
      '회원아이디',
      '주문상품',
      '총주문가격',
      '주문상태',
      '주문날짜',
    ],
  };

  return (
    <Container fluid>
      <Row>
        <Col className="mb-2 ms-3 mr-5">
          <h1>관리자모드 주문 내역 (준비중)</h1>

          <Table striped bordered hover>
            <thead className="table-success">
              <tr>
                {objOrder.header.map((item) => {
                  return <th>{item}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {ordersList.map((order) => {
                return (
                  <tr key={order._id} value={order._id} onClick={onRowClick}>
                    <td>#</td>
                    <td>{order._id}</td>
                    <td>{order.userId}</td>
                    <td>{order.items[0].productId}</td>
                    {/* <td>{order.items[1].quantity}</td> */}
                    <td>{order.items[0].price}</td>
                    <td>{order.status}</td>
                    <td>{order.createdAt}</td>
                  </tr>
                );
              })}
              <tr>
                <td>#</td>
                <td colSpan={3}></td>
                <td>\</td>
                <td></td>
                <td colSpan={2}></td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">주문상세</Modal.Title>
        </Modal.Header>
        <Modal.Body>... 상세내역 ... </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default AdminOrder;
