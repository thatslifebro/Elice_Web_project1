import { useNavigate } from 'react-router-dom';
import { Container, Row, Card } from 'react-bootstrap';
function ProductCard({ products }) {
  const product = {
    title: '바나나',
    categoryId: 'abdc,',
    shortDescription: '신선한바나나입니다.',
    detailDescription: '6팀에서 직접 재배한 신선한 바나나입니다.',
    imageKey: '1234',
    inventory: '100',
    price: '100000원',
    productId: 'bcdkj',
  };
  const navigate = useNavigate();
  return (
    <Container fluid>
      <Row xs="auto">
        <Card style={{ width: '18rem' }}>
          <Card.Link href="/Product">
            <Card.Img
              variant="top"
              src="https://picsum.photos/600/600/?random"
            />
          </Card.Link>
          <Card.Body>
            <Card.Title>title:{product?.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              shortDescription:{product?.shortDescription}
            </Card.Subtitle>
            <Card.Text>price:{product?.price}</Card.Text>
            <Card.Text>categoryId:{product?.categoryId}</Card.Text>
            <Card.Text>productId:{product?.productId}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default ProductCard;
