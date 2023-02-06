import React, { useState, useEffect } from 'react';
import { Container, Row, Form, Col } from 'react-bootstrap';
import axios from 'axios';
import ProductCard from './ProductCard';

function CategoryProducts() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_ADDRESS}/api/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .then(console.log(categories))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCategory = (event) => {
    event.preventDefault();
    setCategoryId(event.target.value);
    console.log(categoryId);
    console.log(event.currentTarget.value);
  };

  //카테고리Id로 물품정보를 모두 가져오는 로직 필요
  //우선 물품정보 모두 가져와서 card로 보이기
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_ADDRESS}/api/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .then(console.log(products))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container fluid>
      <Row>
        <Col className="mb-2 ms-3 mr-5 ">
          <Form>
            <Form.Label htmlFor="SelectCategory">카테고리</Form.Label>
            <Form.Select
              className="mb-4"
              id="SelectCategory"
              aria-label="Default select example"
              onChange={handleCategory}
            >
              <option>카테고리를 선택해주세요</option>
              {categories.map((category) => {
                return (
                  <option key={category._id} value={category._id}>
                    {category.title}
                  </option>
                );
              })}
            </Form.Select>
          </Form>
        </Col>
      </Row>
      <Row md={3} className="align-top align-left">
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </Row>
    </Container>
  );
}

export default CategoryProducts;
