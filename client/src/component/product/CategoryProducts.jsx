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
      .then(() => {
        axios
          .get(`${process.env.REACT_APP_SERVER_ADDRESS}/api/products`)
          .then((res) => {
            setProducts(res.data);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //
  //const ProductCard = ({ product }) => {
  const selectCategoryHandler = (event) => {
    event.preventDefault();
    setCategoryId(event.target.value);

    axios
      .get(
        `${process.env.REACT_APP_SERVER_ADDRESS}/api/categories/?categoryId=${categoryId}`,
      )
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // };

  return (
    <Container fluid>
      <div>
        <h1 className="p-3 text-success">상품목록</h1>
      </div>
      <Row>
        <Col className="mb-2 ms-3 mr-5 ">
          <Form>
            <Form.Label htmlFor="SelectCategory">상품카테고리</Form.Label>
            <Form.Select
              className="mb-4"
              id="SelectCategory"
              aria-label="Default select example"
              onChange={selectCategoryHandler}
              value={categoryId}
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
