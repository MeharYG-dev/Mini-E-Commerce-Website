import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

import "./Navbar.css";

function NavigationBar({ cartCount }) {
  return (
    <Navbar expand="lg" className="shop-navbar" sticky="top">
      <Container>

        {/* Website Brand */}
        <Navbar.Brand as={Link} to="/" className="shop-brand">
          <i className="bi bi-bag-check-fill"></i>
          MiniShop
        </Navbar.Brand>

        {/* Mobile Menu Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">

            <Nav.Link as={Link} to="/" className="nav-item-link">
              <i className="bi bi-house"></i>
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/products"
              className="nav-item-link"
            >
              <i className="bi bi-grid"></i>
              Products
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/cart"
              className="nav-item-link cart-link"
            >
              <i className="bi bi-cart3"></i>
              Cart

              {cartCount > 0 && (
                <span className="cart-badge">
                  {cartCount}
                </span>
              )}
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default NavigationBar;