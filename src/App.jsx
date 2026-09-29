import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavigationBar from "./Components/NavigationBar";
import Home from "./Components/Home";
import ProductToolbar from "./Components/ProductToolbar";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";

function App() {
  // ================================
  // SEARCH, CATEGORY & SORT
  // ================================

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [sortOption, setSortOption] =
    useState("default");


  // ================================
  // DARK MODE
  // ================================

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");

    return savedTheme === "true";
  });


  // ================================
  // SHOPPING CART
  // ================================

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });


  // ================================
  // PRODUCT CATEGORIES
  // ================================

  const categories = [
    "All",
    "Electronics & Gadgets",
    "Fashion & Apparel",
    "Beauty & Personal Care",
    "Home & Kitchen",
    "Health & Fitness"
  ];


  // ================================
  // SAVE CART TO LOCAL STORAGE
  // ================================

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);


  // ================================
  // SAVE DARK MODE
  // ================================

  useEffect(() => {
    localStorage.setItem(
      "darkMode",
      darkMode
    );

    document.body.classList.toggle(
      "dark-mode",
      darkMode
    );
  }, [darkMode]);


  // ================================
  // SEARCH HANDLER
  // ================================

  const handleSearch = (value) => {
    setSearchTerm(value);
  };


  // ================================
  // CLEAR SEARCH
  // ================================

  const handleClearSearch = () => {
    setSearchTerm("");
  };


  // ================================
  // CATEGORY HANDLER
  // ================================

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };


  // ================================
  // SORT HANDLER
  // ================================

  const handleSortChange = (value) => {
    setSortOption(value);
  };


  // ================================
  // ADD PRODUCT TO CART
  // ================================

  const handleAddToCart = (product) => {
    setCart((previousCart) => {

      const existingProduct =
        previousCart.find(
          (item) => item.id === product.id
        );

      // Product already exists
      if (existingProduct) {

        return previousCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1
              }
            : item
        );
      }

      // New product
      return [
        ...previousCart,
        {
          ...product,
          quantity: 1
        }
      ];
    });
  };


  // ================================
  // INCREASE CART QUANTITY
  // ================================

  const handleIncreaseQuantity = (
    productId
  ) => {

    setCart((previousCart) =>
      previousCart.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity:
                item.quantity + 1
            }
          : item
      )
    );
  };


  // ================================
  // DECREASE CART QUANTITY
  // ================================

  const handleDecreaseQuantity = (
    productId
  ) => {

    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity:
                  item.quantity - 1
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  };


  // ================================
  // REMOVE PRODUCT FROM CART
  // ================================

  const handleRemoveFromCart = (
    productId
  ) => {

    setCart((previousCart) =>
      previousCart.filter(
        (item) =>
          item.id !== productId
      )
    );
  };


  // ================================
  // CLEAR ENTIRE CART
  // ================================

  const handleClearCart = () => {
    setCart([]);
  };


  // ================================
  // TOTAL CART ITEMS
  // ================================

  const cartCount = cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );


  // ================================
  // DARK MODE TOGGLE
  // ================================

  const handleToggleTheme = () => {
    setDarkMode(
      (previousMode) =>
        !previousMode
    );
  };


  // ================================
  // APP UI
  // ================================

  return (
    <>
      {/* ============================
          NAVBAR
      ============================ */}

      <NavigationBar
        cartCount={cartCount}
        darkMode={darkMode}
        onToggleTheme={
          handleToggleTheme
        }
      />


      {/* ============================
          ROUTES
      ============================ */}

      <Routes>

        {/* ==========================
            HOME PAGE
        ========================== */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ==========================
            PRODUCTS PAGE
        ========================== */}

        <Route
          path="/products"
          element={
            <>
              <ProductToolbar
                searchTerm={searchTerm}
                onSearch={handleSearch}
                onClear={
                  handleClearSearch
                }
                categories={categories}
                selectedCategory={
                  selectedCategory
                }
                onCategoryChange={
                  handleCategoryChange
                }
                sortOption={sortOption}
                onSortChange={
                  handleSortChange
                }
              />

              <ProductList
                searchTerm={searchTerm}
                selectedCategory={
                  selectedCategory
                }
                sortOption={sortOption}
                onAddToCart={
                  handleAddToCart
                }
              />
            </>
          }
        />


        {/* ==========================
            PRODUCT DETAILS
        ========================== */}

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              onAddToCart={
                handleAddToCart
              }
            />
          }
        />


        {/* ==========================
            CART PAGE
        ========================== */}

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onIncrease={
                handleIncreaseQuantity
              }
              onDecrease={
                handleDecreaseQuantity
              }
              onRemove={
                handleRemoveFromCart
              }
              onClearCart={
                handleClearCart
              }
            />
          }
        />

      </Routes>


      {/* ============================
          FOOTER
      ============================ */}

      <Footer />
    </>
  );
}

export default App;