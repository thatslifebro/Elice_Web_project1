import { Container, Nav, Navbar, Button } from 'react-bootstrap';

function NavBar() {
  return (
    <header>
      <div>
        <>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/home">Home</Navbar.Brand>

              <Nav className="category">
                <Nav.Link href="/fruit">과일</Nav.Link>
                <Nav.Link href="/vegatable">야채</Nav.Link>
                <Nav.Link href="/fast">냉동식품</Nav.Link>
                <Nav.Link href="/diet">다이어트</Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link href="#basket">장바구니</Nav.Link>
                <Button variant="outline-dark">로그인</Button>
              </Nav>
            </Container>
          </Navbar>
        </>
      </div>
    </header>
  );
}

export default NavBar;
