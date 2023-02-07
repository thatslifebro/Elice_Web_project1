import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Stack,
} from 'react-bootstrap';
import axios from 'axios';

function Product() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_ADDRESS}/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .then(console.log(product))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log({ product });
  return (
    <Container fluid>
      <div>
        <h1 className="p-3 text-success">상품상세</h1>
      </div>
      <Stack direction="horizontal" gap={2}>
        <Row xs={1} md={2}>
          <Col sm={8}>
            <Card>
              <Card.Img
                variant="top"
                src="https://picsum.photos/600/600/?random"
                alt="랜덤사진"
              />
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <Card.Body>
                <Card.Title className="mb-2 mt-5 text-large">
                  <h1>{product?.title}</h1>
                </Card.Title>
                <Badge bg="warning" text="dark">
                  추천
                </Badge>{' '}
                <Card.Subtitle className="mb-2 mt-2 text-muted">
                  {product?.shortDescription}
                </Card.Subtitle>
                <Card.Text className="mb-2 mt-5">
                  {product?.detailDescription}
                </Card.Text>
                <Card.Text>{product?.price}</Card.Text>
              </Card.Body>
            </Card>
            <Button
              variant="outline-primary"
              onClick={(e) => {
                e.preventDefault();
                localStorage.setItem('productId', product._id);
              }}
            >
              장바구니 추가
            </Button>{' '}
            <Button variant="outline-primary">
              사용자모드에서만 보일 바로구매
            </Button>{' '}
            <Button variant="outline-primary">
              관리자모드에서만 보일 수정버튼
            </Button>{' '}
          </Col>
        </Row>
      </Stack>
      <Row>
        <Col sm>상품상세 설명{product?.detailDescription}</Col>
        <Col sm></Col>
      </Row>
    </Container>
  );
}

export default Product;
