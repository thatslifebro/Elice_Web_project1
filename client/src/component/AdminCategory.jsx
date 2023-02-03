import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { useEffect } from 'react';

function AdminCategoryForm() {
  const CreateCategory = () => {
    const [newTitle, setNewTitle] = useState('');
    return (
      <Row>
        <Col>
          <Form.Control
            placeholder="등록할 카테고리"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={newTitle}
            onChange={(e) => {
              e.preventDefault();
              setNewTitle(e.target.value);
            }}
          />
        </Col>
        <Col>
          <Button
            variant="primary"
            type="submit"
            title={newTitle}
            onClick={(e) => {
              e.preventDefault();
              axios
                .post(`http://localhost:3001/api/categories`, {
                  title: e.target.title,
                })
                .catch((err) => {
                  console.log(err);
                });
            }}
          >
            등록
          </Button>
        </Col>
      </Row>
    );
  };

  const Category = ({ category }) => {
    const [newTitle, setNewTitle] = useState('');
    const categoryInput = useRef();
    const updateCategory = (e) => {
      e.preventDefault();
      axios
        .put(`http://localhost:3001/api/categories/${category._id}`, {
          title: e.target.title,
        })
        .then((res) => {
          categoryInput.current.placeholder = newTitle;
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return (
      <Row>
        <Col>
          <Form.Control
            placeholder={category.title}
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={newTitle}
            ref={categoryInput}
            onChange={(e) => {
              e.preventDefault();
              setNewTitle(e.target.value);
            }}
          />
        </Col>
        <Col>
          <Button
            variant="warning"
            cid={category._id}
            title={newTitle}
            onClick={updateCategory}
          >
            수정
          </Button>{' '}
          <Button variant="danger">삭제</Button>
        </Col>
      </Row>
    );
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3001/api/categories')
      .then((res) => {
        setCategories(res.data);
      })
      .then(console.log(categories))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      {categories.map((category) => {
        return <Category key={category._id} category={category} />;
      })}
      <br />
      <CreateCategory />
    </Container>
  );
}

export default AdminCategoryForm;
