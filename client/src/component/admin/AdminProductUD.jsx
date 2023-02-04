import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Row, Col, Container, Table } from 'react-bootstrap';
import { useEffect } from 'react';

function AdminProductUD() {
  const Product = ({ product }) => {
    const category = categories.find((data) => data._id === product.categoryId);
    return (
      <Row>
        <Col sm="2" style={{ border: 'solid 1px' }}>
          {product.imageKey}
        </Col>
        <Col sm="2" style={{ border: 'solid 1px' }}>
          상품 이름
          <br />
          요약
          <br />
          상세 설명
          <br />
          가격
          <br />
          재고 수량
          <br />
          카테고리
        </Col>
        <Col sm="5" style={{ border: 'solid 1px' }}>
          {product.title}
          <br />
          {product.shortDescription}
          <br />
          {product.detailDescription}
          <br />
          가격 : {product.price}
          <br />
          {product.inventory}
          <br />
          {category ? category.title : '없음'}
        </Col>
        <Col sm="3">
          <Button variant="warning" type="submit">
            수정
          </Button>
          <Button variant="danger" type="submit">
            삭제
          </Button>
        </Col>
      </Row>
    );
  };

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/products')
      .then((res) => {
        setProducts(res.data);
      })
      .then(() => {
        axios.get('http://localhost:3001/api/categories');
      })
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      {products.map((product) => {
        return <Product key={product._id} product={product} />;
      })}
    </Container>
  );
}

export default AdminProductUD;
