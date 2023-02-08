import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import { verifyTokken } from '../../util/verify';
import { Link } from 'react-router-dom';
import instance from '../../util/axios-setting';
const Header = () => {
  const [auth, setAuth] = useState('NOTUSER');
  useEffect(() => {
    verifyTokken().then(setAuth);
  }, []);
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('jwt');
    setAuth('NOTUSER');
    instance.defaults.headers.common['Authorization'] = null;
  };
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    instance.get(`/api/categories`).then((res) => {
      setCategories(res.data);
    });
  }, []);
  const onClickCategoryHandler = (e) => {
    e.preventDefault();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-1">
        <Navbar bg="white">
          <Container>
            <Navbar.Brand href="/main">
              <img
                src="http://pngimg.com/uploads/apple_logo/apple_logo_PNG19674.png"
                width="40"
                height="30"
                className="d-inline-block align-top bg-white"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
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
            <li className="nav-item">
              <Link className="nav-link active" to={'/product'}>
                Product
              </Link>
            </li>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              {categories.map((data) => {
                return (
                  <NavDropdown.Item
                    key={data._id}
                    value={data._id}
                    href={`/product/:${data._id}`}
                  >
                    {data.title}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </ul>

          {auth !== 'NOTUSER' ? (
            <>
              <Button variant="outline-dark" onClick={handleLogout}>
                <i className="bi-cart-fill me-1"></i>
                Logout
              </Button>
              {auth === 'ADMIN' ? (
                <Link className="btn btn-outline-dark" to={'/admin'}>
                  <i className="bi-cart-fill me-1"></i>
                  Admin
                </Link>
              ) : (
                ''
              )}
            </>
          ) : (
            <Link className="btn btn-outline-dark" to={'/login'}>
              <i className="bi-cart-fill me-1"></i>
              Login
            </Link>
          )}
          <Link className="btn btn-outline-dark ms-lg-1" to={'/cart'}>
            <i className="bi-cart-fill me-1 "></i>
            Cart
            <span className="badge bg-white text-white ms-1 rounded-pill">
              <text>🛒</text>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
