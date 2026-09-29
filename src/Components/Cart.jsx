import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import "./Cart.css";

function Cart({
  cart,
  onIncrease,
  onDecrease,
  onRemove,
  onClearCart
}) {
  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) =>
      total + (item.priceCents / 100) * item.quantity,
    0
  );

  // Shipping charge
  const shipping = subtotal > 0 ? 5 : 0;

  // Final total
  const total = subtotal + shipping;

  // Total number of products
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Empty cart
  if (cart.length === 0) {
    return (
      <section className="cart-section">
        <Container>
          <div className="cart-page-header">
            <h1>Shopping Cart</h1>
          </div>

          <div className="empty-cart">
            <div className="empty-cart-icon">
              <i className="bi bi-cart-x"></i>
            </div>

            <h2>Your Cart is Empty</h2>

            <p>
              You haven't added any products to your cart yet.
            </p>

            <Button
              as={Link}
              to="/products"
              variant="primary"
            >
              <i className="bi bi-shop"></i>
              Continue Shopping
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="cart-section">
      <Container>

        {/* Cart Header */}
        <div className="cart-page-header">
          <div>
            <h1>Shopping Cart</h1>
            <p>{totalItems} items in your cart</p>
          </div>

          <Button
            variant="outline-danger"
            onClick={onClearCart}
          >
            <i className="bi bi-trash3"></i>
            Clear Cart
          </Button>
        </div>

        <Row className="g-4">

          {/* Cart Products */}
          <Col lg={8}>
            {cart.map((item) => (
              <Card
                className="cart-item-card"
                key={item.id}
              >
                <div className="cart-item-content">

                  {/* Product Image */}
                  <div className="cart-item-image-wrapper">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />
                  </div>

                  {/* Product Information */}
                  <div className="cart-item-info">
                    <h5 className="cart-item-title">
                      {item.name}
                    </h5>

                    <p className="cart-item-category">
                      {item.category}
                    </p>

                    <p className="cart-item-price">
                      ${(item.priceCents / 100).toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="cart-quantity-section">
                    <span className="quantity-label">
                      Quantity
                    </span>

                    <div className="cart-quantity-control">

                      <Button
                        variant="outline-secondary"
                        onClick={() =>
                          onDecrease(item.id)
                        }
                      >
                        <i className="bi bi-dash"></i>
                      </Button>

                      <span className="cart-quantity">
                        {item.quantity}
                      </span>

                      <Button
                        variant="outline-secondary"
                        onClick={() =>
                          onIncrease(item.id)
                        }
                      >
                        <i className="bi bi-plus"></i>
                      </Button>

                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="cart-item-total">
                    <span>Item Total</span>

                    <strong>
                      $
                      {(
                        (item.priceCents / 100) *
                        item.quantity
                      ).toFixed(2)}
                    </strong>
                  </div>

                  {/* Remove Button */}
                  <Button
                    variant="outline-danger"
                    className="remove-button"
                    onClick={() =>
                      onRemove(item.id)
                    }
                  >
                    <i className="bi bi-trash"></i>
                    Remove
                  </Button>

                </div>
              </Card>
            ))}
          </Col>

          {/* Order Summary */}
          <Col lg={4}>
            <Card className="order-summary">
              <Card.Body>

                <h4>Order Summary</h4>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="summary-row">
                  <span>Shipping</span>
                  <span>
                    ${shipping.toFixed(2)}
                  </span>
                </div>

                <hr />

                <div className="summary-total">
                  <strong>Total</strong>

                  <strong>
                    ${total.toFixed(2)}
                  </strong>
                </div>

                {/* Checkout Button */}
                <Button
                  variant="primary"
                  size="lg"
                  className="checkout-button"
                >
                  <i className="bi bi-credit-card"></i>
                  Proceed to Checkout
                </Button>

                {/* Continue Shopping */}
                <Button
                  as={Link}
                  to="/products"
                  variant="outline-secondary"
                  className="continue-button"
                >
                  Continue Shopping
                </Button>

              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Cart;