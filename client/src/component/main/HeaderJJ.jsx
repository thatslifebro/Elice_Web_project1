import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { verifyTokken } from '../../util/verify';
import { Link } from 'react-router-dom';
const Header = () => {
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
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to={'/main'}>
          6team Shop
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link className="nav-link active" to={'/main'}>
                Home
              </Link>
            </li>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="/fruit">과일</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/vegatable">야채</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/fast">냉동식품</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/diet">다이어트</NavDropdown.Item>
            </NavDropdown>
          </ul>

          {auth !== 'NOTUSER' ? (
            <Button className="btn btn-outline-dark" onClick={handleLogout}>
              로그아웃
            </Button>
          ) : (
            <Button className="btn btn-outline-dark">
              <Nav.Link href="/login">로그인</Nav.Link>
            </Button>
          )}
          <Link className="btn btn-outline-dark" to={'/cart'}>
            <i className="bi-cart-fill me-1"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              0
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
