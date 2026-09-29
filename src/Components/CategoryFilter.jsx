import Button from "react-bootstrap/Button";

import "./CategoryFilter.css";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <section className="category-section">
      <div className="container">

        <div className="category-header">
          <h2>Shop by Category</h2>

          <p>
            Browse products by category
          </p>
        </div>

        <div className="category-buttons">

          {categories.map((category) => (
            <Button
              key={category}
              variant={
                selectedCategory === category
                  ? "primary"
                  : "outline-primary"
              }
              className="category-button"
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CategoryFilter;