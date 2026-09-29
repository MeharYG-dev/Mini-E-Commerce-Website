import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

import { Link, useNavigate, useParams } from "react-router-dom";

import "./ProductDetails.css";

function ProductDetails({ onAddToCart }) {
  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json"
      );

      if (!response.ok) {
        throw new Error("Unable to fetch products");
      }

      const data = await response.json();

      // Find the product using the ID from the URL
      const selectedProduct = data.find(
        (item) => String(item.id) === String(id)
      );

      if (!selectedProduct) {
        throw new Error("Product not found");
      }

      setProduct(selectedProduct);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const increaseQuantity = () => {
    setQuantity(
      (previousQuantity) => previousQuantity + 1
    );
  };

  const decreaseQuantity = () => {
    setQuantity((previousQuantity) => {
      if (previousQuantity <= 1) {
        return 1;
      }

      return previousQuantity - 1;
    });
  };

  const handleAddToCart = () => {
    if (!product) {
      return;
    }

    for (let index = 0; index < quantity; index++) {
      onAddToCart(product);
    }

    navigate("/cart");
  };

  if (loading) {
    return (
      <div className="details-loading">
        <Spinner
          animation="border"
          variant="primary"
        />

        <p>Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          <Alert.Heading>
            Unable to load product
          </Alert.Heading>

          <p>{error}</p>

          <Button
            variant="outline-danger"
            onClick={() => navigate("/products")}
          >
            Back to Products
          </Button>
        </Alert>
      </Container>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <section className="product-details-section">
      <Container>

        {/* Back button */}
        <Button
          as={Link}
          to="/products"
          variant="outline-secondary"
          className="back-button"
        >
          <i className="bi bi-arrow-left"></i>
          Back to Products
        </Button>

        <Row className="product-details-card g-5">

          {/* Product Image */}
          <Col md={6}>
            <div className="details-image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="details-image"
              />
            </div>
          </Col>

          {/* Product Information */}
          <Col md={6}>
            <div className="details-content">

              {/* Category */}
              <span className="details-category">
                {product.category}
              </span>

              {/* Product Name */}
              <h1 className="details-title">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="details-rating">

                <span className="rating-stars">
                  <i className="bi bi-star-fill"></i>

                  {product.rating?.stars || "N/A"}
                </span>

                <span className="review-count">
                  {product.rating?.count || 0} reviews
                </span>

              </div>

              {/* Price */}
              <h2 className="details-price">
                ${(product.priceCents / 100).toFixed(2)}
              </h2>

              {/* Description */}
              <p className="details-description">
                {product.description}
              </p>

              {/* Sub Category */}
              {product.subCategory && (
                <p className="details-subcategory">
                  <strong>Category:</strong>{" "}
                  {product.subCategory}
                </p>
              )}

              <hr />

              {/* Quantity */}
              <div className="quantity-section">

                <h6>Quantity</h6>

                <div className="quantity-control">

                  <Button
                    variant="outline-secondary"
                    onClick={decreaseQuantity}
                  >
                    <i className="bi bi-dash"></i>
                  </Button>

                  <span className="quantity-value">
                    {quantity}
                  </span>

                  <Button
                    variant="outline-secondary"
                    onClick={increaseQuantity}
                  >
                    <i className="bi bi-plus"></i>
                  </Button>

                </div>

              </div>

              {/* Total */}
              <div className="details-total">

                <span>Total</span>

                <strong>
                  $
                  {(
                    (product.priceCents / 100) *
                    quantity
                  ).toFixed(2)}
                </strong>

              </div>

              {/* Add To Cart */}
              <Button
                variant="primary"
                size="lg"
                className="details-cart-button"
                onClick={handleAddToCart}
              >
                <i className="bi bi-cart-plus"></i>

                Add {quantity} to Cart
              </Button>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}

export default ProductDetails;