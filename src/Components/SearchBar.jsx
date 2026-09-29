import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

 import "./SearchBar.css";

function SearchBar({ searchTerm, onSearch, onClear }) {
  return (
    <div className="search-section">
      <div className="container">

        <div className="search-wrapper">

          <InputGroup>

            {/* Search Icon */}
            <InputGroup.Text className="search-icon">
              <i className="bi bi-search"></i>
            </InputGroup.Text>

            {/* Search Input */}
            <Form.Control
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(event) => onSearch(event.target.value)}
              className="search-input"
            />

            {/* Clear Button */}
            {searchTerm && (
              <Button
                variant="outline-secondary"
                onClick={onClear}
                className="clear-button"
              >
                <i className="bi bi-x-lg"></i>
              </Button>
            )}

          </InputGroup>

        </div>

      </div>
    </div>
  );
}

export default SearchBar;