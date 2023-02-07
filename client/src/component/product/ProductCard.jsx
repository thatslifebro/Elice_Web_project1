import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

function ProductCard({ product }) {
  const navigate = useNavigate();
  const navigateToPurchase = () => {
    navigate(`/product/${product._id}`);
    console.log('card_product:', product._id);
  };
  return (
    <Container fluid>
      <Row xs="auto">
        <Col>
          <Card className="mb-2 ms-3 mr-5">
            <Card.Body>
              <Card.Link onClick={navigateToPurchase}>
                <Card.Img
                  variant="top"
                  src="https://picsum.photos/600/600/?random"
                  alt="랜덤사진"
                />
              </Card.Link>
              <Card.Title>{product?.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {product?.shortDescription}
              </Card.Subtitle>
              <Card.Text>{product?.price}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductCard;
