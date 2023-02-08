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
import instance from '../../util/axios-setting';

function Product() {
  const [categoryId, setCategoryId] = useState('');
  const [productId, setProductId] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [detailDescription, setDetailDescription] = useState('');
  const [inventory, setInventory] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [imageKey, setImageKey] = useState('');
  const { id } = useParams();

  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    instance
      .get(`/api/products/${id}`)
      .then((res) => {
        setProductId(res.data._id);
        setCategoryId(res.data.categoryId);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setShortDescription(res.data.shortDescription);
        setDetailDescription(res.data.detailDescription);
        setInventory(res.data.inventory);
        setCategoryId(res.data.imageKey);
        instance
          .get(`/api/products/img/${res.data.imageKey}`, {
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
            responseType: 'blob',
          })
          .then((res) => {
            const getfile = new File([res.data], '');
            const reader = new FileReader();
            reader.onload = (event) => {
              const previewImage = String(event.target?.result);
              setImgSrc(previewImage);
            };
            reader.readAsDataURL(getfile);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid>
      <div>
        <h1 className="p-3 text-success">상품상세</h1>
      </div>
      <Stack direction="horizontal" gap={2}>
        <Row xs={1} md={2}>
          <Col sm={8}>
            <Card>
              <Card.Img variant="top" src={imgSrc} alt="랜덤사진" />
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <Card.Body>
                <Card.Title className="mb-2 mt-5 text-large">
                  <h1>{title}</h1>
                </Card.Title>
                <Badge bg="warning" text="dark">
                  추천
                </Badge>
                <Card.Subtitle className="mb-2 mt-2 text-muted">
                  {shortDescription}
                </Card.Subtitle>
                <Card.Text className="mb-2 mt-5">{detailDescription}</Card.Text>
                <Card.Text>{price}</Card.Text>
              </Card.Body>
            </Card>

            <Button
              variant="outline-primary"
              onClick={(e) => {
                e.preventDefault();
                const items = JSON.parse(localStorage.getItem('items'));

                if (items) {
                  const check = items.find(
                    (item) => item.productId === productId,
                  );
                  if (check !== undefined) {
                    const newItems = items.map((item, idx) => {
                      if (item.productId === productId) {
                        item.quantity = quantity;
                      }
                      return item;
                    });
                    localStorage.setItem('items', JSON.stringify(newItems));
                    return;
                  }
                  localStorage.setItem(
                    'items',
                    JSON.stringify([
                      ...items,
                      {
                        productId,
                        quantity,
                        price,
                        title,
                      },
                    ]),
                  );
                }
                if (!items) {
                  localStorage.setItem(
                    'items',
                    JSON.stringify([
                      {
                        productId,
                        quantity,
                        price,
                        title,
                      },
                    ]),
                  );
                }
              }}
            >
              장바구니 추가
            </Button>
            <Button variant="outline-primary">
              사용자모드에서만 보일 바로구매
            </Button>
            <Button variant="outline-primary">
              관리자모드에서만 보일 수정버튼
            </Button>
            <input
              value={quantity}
              onChange={(e) => {
                e.preventDefault();
                setQuantity(e.target.value);
              }}
            ></input>
          </Col>
        </Row>
      </Stack>
      <Row>
        <Col sm>상품상세 설명{detailDescription}</Col>
        <Col sm></Col>
      </Row>
    </Container>
  );
}

export default Product;
