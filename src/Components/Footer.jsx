import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="shop-footer">
      <Container>
        <Row className="g-4">

          <Col lg={5} md={6}>
            <div className="footer-brand">

              <Link
                to="/"
                className="footer-logo"
              >
                <i className="bi bi-bag-check-fill"></i>
                MiniShop
              </Link>

              <p>
                Your simple and reliable online shopping
                destination for quality products.
              </p>

              <div className="footer-social">

                <a href="#" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="#" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="#" aria-label="Twitter">
                  <i className="bi bi-twitter-x"></i>
                </a>

                <a href="#" aria-label="GitHub">
                  <i className="bi bi-github"></i>
                </a>

              </div>
            </div>
          </Col>

          <Col lg={3} md={3} sm={6}>
            <div className="footer-links">

              <h5>Quick Links</h5>

              <Link to="/">
                Home
              </Link>

              <Link to="/products">
                Products
              </Link>

              <Link to="/cart">
                Shopping Cart
              </Link>

            </div>
          </Col>

          <Col lg={4} md={3} sm={6}>
            <div className="footer-links">

              <h5>Customer Service</h5>

              <a href="#">
                Help Center
              </a>

              <a href="#">
                Shipping Information
              </a>

              <a href="#">
                Returns & Refunds
              </a>

              <a href="#">
                Contact Us
              </a>

            </div>
          </Col>

        </Row>

        <hr className="footer-divider" />

        <div className="footer-bottom">

          <p>
            © {currentYear} MiniShop. All rights reserved.
          </p>

          <p>
            Built with React & Bootstrap
          </p>

        </div>
      </Container>
    </footer>
  );
}

export default Footer;