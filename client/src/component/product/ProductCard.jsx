import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import instance from '../../util/axios-setting';

function ProductCard({ product }) {
  const navigate = useNavigate();
  const navigateToPurchase = () => {
    navigate(`/product/${product._id}`);
    console.log('card_product:', product._id);
  };

  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    instance
      .get(`/api/products/img/${product.imageKey}`, {
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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Container fluid>
      <Row xs="auto">
        <Col>
          <Card className="mb-2 ms-3 mr-5">
            <Card.Body>
              <Card.Link onClick={navigateToPurchase}>
                <Card.Img variant="top" src={imgSrc} alt="상품사진" />
              </Card.Link>
              <Card.Title>{product?.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {product?.shortDescription}
              </Card.Subtitle>
              <Card.Text>{product?.price}</Card.Text>
              <Card.Text>imageKey: {product?.imageKey}</Card.Text>
              <Card.Text>categoryId: {product?.categoryId}</Card.Text>
              <Card.Text>productId: {product?._id}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductCard;
