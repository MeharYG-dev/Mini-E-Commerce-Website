
import { useEffect, useMemo, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

import ProductCard from "./ProductCard";

import "./ProductList.css";

function ProductList({
  searchTerm,
  selectedCategory,
  sortOption,
  onAddToCart
}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
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

      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Search products by name
    if (searchTerm.trim() !== "") {
      const searchValue = searchTerm.toLowerCase();

      result = result.filter((product) =>
        product.name.toLowerCase().includes(searchValue)
      );
    }

    // Filter products by category
    if (selectedCategory !== "All") {
      result = result.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Sort products
    switch (sortOption) {
      case "price-low-high":
        result.sort(
          (firstProduct, secondProduct) =>
            firstProduct.priceCents - secondProduct.priceCents
        );
        break;

      case "price-high-low":
        result.sort(
          (firstProduct, secondProduct) =>
            secondProduct.priceCents - firstProduct.priceCents
        );
        break;

      case "rating-high-low":
        result.sort(
          (firstProduct, secondProduct) =>
            (secondProduct.rating?.stars || 0) -
            (firstProduct.rating?.stars || 0)
        );
        break;

      case "name-a-z":
        result.sort((firstProduct, secondProduct) =>
          firstProduct.name.localeCompare(secondProduct.name)
        );
        break;

      default:
        break;
    }

    return result;
  }, [
    products,
    searchTerm,
    selectedCategory,
    sortOption
  ]);

  if (loading) {
    return (
      <div className="products-loading">
        <Spinner animation="border" variant="primary" />

        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          <Alert.Heading>
            Unable to load products
          </Alert.Heading>

          <p>{error}</p>

          <button
            className="btn btn-outline-danger"
            onClick={fetchProducts}
          >
            Try Again
          </button>
        </Alert>
      </Container>
    );
  }

  return (
    <section className="products-section">
      <Container>
        <div className="products-header">
          <div>
            <h2>Our Products</h2>

            <p>
              {filteredAndSortedProducts.length} products found
            </p>
          </div>
        </div>

        {filteredAndSortedProducts.length === 0 ? (
          <Alert
            variant="info"
            className="no-products"
          >
            <i className="bi bi-search"></i>

            No products found.
          </Alert>
        ) : (
          <Row className="g-4">
            {filteredAndSortedProducts.map((product) => (
              <Col
                key={product.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
              >
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
}

export default ProductList;

