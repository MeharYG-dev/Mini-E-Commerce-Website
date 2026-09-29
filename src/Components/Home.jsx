import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <section className="home-hero">
      <Container>
        <Row className="align-items-center">
          <Col lg={7} md={6}>
            <div className="hero-content">
              <span className="hero-badge">
                <i className="bi bi-stars"></i>
                Welcome to MiniShop
              </span>

              <h1>
                Shop Smart.
                <br />
                <span>Live Better.</span>
              </h1>

              <p>
                Discover quality products across electronics,
                fashion, beauty, home essentials, and more.
                Everything you need in one simple shopping experience.
              </p>

              <div className="hero-buttons">
                <Button
                  as={Link}
                  to="/products"
                  variant="primary"
                  className="shop-now-button"
                >
                  <i className="bi bi-bag-check"></i>
                  Shop Now
                </Button>

                <Button
                  as={Link}
                  to="/products"
                  variant="outline-primary"
                  className="explore-button"
                >
                  Explore Products
                  <i className="bi bi-arrow-right"></i>
                </Button>
              </div>

              <div className="hero-features">
                <div className="hero-feature">
                  <i className="bi bi-truck"></i>
                  <div>
                    <strong>Fast Delivery</strong>
                    <span>Quick & reliable</span>
                  </div>
                </div>

                <div className="hero-feature">
                  <i className="bi bi-shield-check"></i>
                  <div>
                    <strong>Secure Shopping</strong>
                    <span>Safe & trusted</span>
                  </div>
                </div>

                <div className="hero-feature">
                  <i className="bi bi-headset"></i>
                  <div>
                    <strong>Support</strong>
                    <span>We're here to help</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={5} md={6}>
            <div className="hero-visual">
              <div className="hero-circle"></div>

              <div className="shopping-bag">
                <i className="bi bi-bag-heart-fill"></i>
              </div>

              <div className="floating-card card-one">
                <i className="bi bi-stars"></i>
                <span>Quality Products</span>
              </div>

              <div className="floating-card card-two">
                <i className="bi bi-heart-fill"></i>
                <span>Happy Shopping</span>
              </div>

              <div className="floating-card card-three">
                <i className="bi bi-cart-check-fill"></i>
                <span>Easy Checkout</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;