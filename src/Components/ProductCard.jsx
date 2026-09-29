import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

import "./ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  return (
    <Card className="product-card h-100">

      {/* Product Image */}
      <div className="product-image-wrapper">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="product-image"
        />
      </div>

      <Card.Body className="d-flex flex-column">

        {/* Category */}
        <span className="product-category">
          {product.category}
        </span>

        {/* Product Name */}
        <Card.Title className="product-title">
          {product.name}
        </Card.Title>

        {/* Rating */}
        <div className="product-rating">
          <i className="bi bi-star-fill"></i>

          <span>
            {product.rating?.stars || "N/A"}
          </span>

          <small>
            ({product.rating?.count || 0})
          </small>
        </div>

        {/* Price */}
        <h5 className="product-price">
          ${(product.priceCents / 100).toFixed(2)}
        </h5>

        {/* View Details */}
        <Button
          as={Link}
          to={`/product/${product.id}`}
          variant="outline-primary"
          className="details-button"
        >
          <i className="bi bi-eye"></i>
          View Details
        </Button>

        {/* Add To Cart */}
        <Button
          variant="primary"
          className="add-cart-button"
          onClick={() => onAddToCart(product)}
        >
          <i className="bi bi-cart-plus"></i>
          Add to Cart
        </Button>

      </Card.Body>
    </Card>
  );
}

export default ProductCard;