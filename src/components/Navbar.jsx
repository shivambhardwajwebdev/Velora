import React from "react";
import { ShoppingCart, Search, User, Heart } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import "../App.css";

const Navbar = () => {
  const { searchQuery, setSearchQuery } = useProducts();
  const { cartItems } = useCart(); // Access dynamic cart items
  const { user } = useAuth(); // Access user authentication status
  const navigate = useNavigate();

  // Dynamic cart count
  const cartCount = cartItems.length;

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" style={{ textDecoration: 'none', color: 'inherit' }}>
        VELORA
      </Link>

      <div className="nav-links">
        <Link to="/">Shop</Link>
        <Link to="/">New Arrivals</Link>
        <Link to="/">Best Sellers</Link>
        <Link to="/">Deals</Link>
      </div>

      <div className="nav-actions">
        <div className="search-container">
          <input
          id="search-input"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="search-icon" size={18} />
        </div>

        {/* Profile Icon: Redirects to Profile if logged in, else Login */}
        <div className="icon-group" onClick={() => navigate(user ? "/profile" : "/login")}>
          <User className="nav-icon" />
        </div>

        <div className="icon-group">
          <Heart className="nav-icon" />
        </div>

        {/* Cart Icon: Opens Cart page with dynamic badge */}
        <div className="cart-container" onClick={() => navigate("/cart")} style={{ cursor: 'pointer', position: 'relative' }}>
          <ShoppingCart className="nav-icon" />
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;