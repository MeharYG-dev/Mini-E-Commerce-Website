import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import SortProducts from "./SortProducts";

import "./ProductToolbar.css";

function ProductToolbar({
  searchTerm,
  onSearch,
  onClear,
  categories,
  selectedCategory,
  onCategoryChange,
  sortOption,
  onSortChange
}) {
  return (
    <div className="product-toolbar">
      <Row className="align-items-end g-3">
        <Col lg={5} md={12}>
          <SearchBar
            searchTerm={searchTerm}
            onSearch={onSearch}
            onClear={onClear}
          />
        </Col>

        <Col lg={4} md={6}>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
          />
        </Col>

        <Col lg={3} md={6}>
          <SortProducts
            sortOption={sortOption}
            onSortChange={onSortChange}
          />
        </Col>
      </Row>
    </div>
  );
}

export default ProductToolbar;