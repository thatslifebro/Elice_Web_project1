import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import './NavBar.css';

function NavBar() {
  return (
    <header>
      <div>
        <Navbar fixed="top" bg="light" style={{ variant: 'dark' }}>
          <Container>
            <Nav className="me-auto">
              <Navbar.Brand href="/main" className="main">
                육쾌상쾌
              </Navbar.Brand>
              <Nav.Link href="/main">Home</Nav.Link>

              <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item href="/fruit">과일</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/vegatable">야채</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/fast">냉동식품</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/diet">다이어트</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <Nav.Link href="/user-withdrawal" style={{ color: '#000000' }}>
                장바구니
              </Nav.Link>
              <Button href="/login" variant="outline-dark">
                Login
              </Button>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}

export default NavBar;
