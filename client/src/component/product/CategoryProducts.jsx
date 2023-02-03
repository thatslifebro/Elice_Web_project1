import React, { useState, useEffect } from 'react';
import { Container, Row, DropdownButton, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import ProductCard from './ProductCard';

function CategoryProducts({ categoryId }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .then(console.log(categories))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid>
      <Row xs="auto">
        <DropdownButton id="dropdown-basic-button" title="카테고리">
          {categories.map((category) => {
            return (
              <Dropdown.Item Key={category._id}>{category.title}</Dropdown.Item>
            );
          })}
        </DropdownButton>
      </Row>
      <Row>
        <ProductCard />
      </Row>
    </Container>
  );
}

export default CategoryProducts;
