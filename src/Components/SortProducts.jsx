import Form from "react-bootstrap/Form";

function SortProducts({ sortOption, onSortChange }) {
  return (
    <Form.Select
      value={sortOption}
      onChange={(event) => onSortChange(event.target.value)}
      className="sort-select"
    >
      <option value="default">Sort Products</option>
      <option value="title-asc">Title: A-Z</option>
      <option value="title-desc">Title: Z-A</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="rating-desc">Rating: High to Low</option>
      <option value="rating-asc">Rating: Low to High</option>
    </Form.Select>
  );
}

export default SortProducts;