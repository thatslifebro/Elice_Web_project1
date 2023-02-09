import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

function ProductCard({ product }) {
  const navigate = useNavigate();
  const navigateToPurchase = () => {
    navigate(`/product/${product._id}`);
    console.log('card_product:', product._id);
  };
  return (
    <Container fluid>
      <Row
        xs="auto"
        className="justify-content-md-center square border border-success"
      >
        <Col></Col>
        <Col xs={6} className="square border border-success">
          <Card className="mb-2 ms-3 mr-5">
            <Card.Body>
              <Card.Link onClick={navigateToPurchase}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/300/400/?random"
                  alt="랜덤사진"
                />
              </Card.Link>

              <Card.Title className="mb-2 mt-3 text-large fw-bold">
                {product?.title}
              </Card.Title>
              <Card.Subtitle className="mb-2 mt-2 text-muted">
                {product?.shortDescription}
              </Card.Subtitle>
              <Card.Text className="mb-2 mt-2 fw-bold">
                {product?.price}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default ProductCard;
