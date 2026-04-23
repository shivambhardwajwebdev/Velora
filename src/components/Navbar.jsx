import React from "react";
import { ShoppingCart, Search, User, Heart } from 'lucide-react';
import "../App.css";
import { useProducts } from "../context/ProductContext";
const Navbar =()=>{
const { searchQuery, setSearchQuery } = useProducts();
return ( 
<nav className="navbar">
        <div className="nav-logo">VELORA</div>
        <div className="nav-links">
          <a href="#">Shop</a>
          <a href="#">New Arrivals</a>
          <a href="#">Best Sellers</a>
          <a href="#">Deals</a>
        </div>
        <div className="nav-actions">
          <div className="search-container">
            <input
      type="text"
      placeholder="Search"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
            <Search className="search-icon" />
          </div>
          <User className="nav-icon" />
          <Heart className="nav-icon" />
          <div className="search-container">
            <ShoppingCart className="nav-icon" />
            <span className="cart-badge">2</span>
          </div>
        </div>
      </nav>
);
};

export default Navbar;