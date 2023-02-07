import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
class Header extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <Link class="navbar-brand" to={'/main'}>
            6team Shop
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <Link class="nav-link active" to={'/main'}>
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
            <Link class="btn btn-outline-dark" to={'/login'}>
              <i class="bi-cart-fill me-1 "></i>
              Login
            </Link>
            <Link class="btn btn-outline-dark" to={'/cart'}>
              <i class="bi-cart-fill me-1"></i>
              Cart
              <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default Header;
