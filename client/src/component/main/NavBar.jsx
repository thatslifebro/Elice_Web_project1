import { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { verifyTokken } from '../../util/verify';

function NavBar() {
  const [auth, setAuth] = useState('NOTUSER');
  useEffect(() => {
    verifyTokken().then(setAuth);
  }, []);
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('jwt');
    setAuth('NOTUSER');
  };

  return (
    <header>
      <div>
        <>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/main">Home</Navbar.Brand>

              <Nav className="category">
                <Nav.Link href="/fruit">과일</Nav.Link>
                <Nav.Link href="/vegatable">야채</Nav.Link>
                <Nav.Link href="/fast">냉동식품</Nav.Link>
                <Nav.Link href="/diet">다이어트</Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link href="#basket">장바구니</Nav.Link>
                {auth !== 'NOTUSER' ? (
                  <Button onClick={handleLogout} variant="outline-dark">
                    로그아웃
                  </Button>
                ) : (
                  <Button variant="outline-dark">
                    <Nav.Link href="/login">로그인</Nav.Link>
                  </Button>
                )}
              </Nav>
            </Container>
          </Navbar>
        </>
      </div>
    </header>
  );
}

export default NavBar;
