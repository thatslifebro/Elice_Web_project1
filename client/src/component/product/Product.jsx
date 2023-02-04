import { Card, Button } from 'react-bootstrap';

//db-get-상세이미지
function Product({ productId }) {
  //get
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
  return (
    <>
      <p>
        <h1>상품상세페이지</h1>
      </p>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://picsum.photos/600/600/?random" />
        <Card.Body>
          <Card.Title>상품명</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            신선한 CPU입니다.
          </Card.Subtitle>
          <Card.Text>10,000,000원</Card.Text>
        </Card.Body>
      </Card>
      <Button variant="outline-primary">사용자모드에서만 보일 장바구니</Button>{' '}
      <Button variant="outline-primary">사용자모드에서만 보일 바로구매</Button>{' '}
      <Button variant="outline-primary">관리자모드에서만 보일 수정버튼</Button>{' '}
    </>
  );
}

export default Product;
