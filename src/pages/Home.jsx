import React from 'react';
import '../App.css';

import homeMainImg from "../assets/images/homeMain.png";
import Navbar from '../components/Navbar';

import { useProducts } from "../context/ProductContext";

// 👇 ADD THESE (IMPORTANT)
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
const Home = () => {
  const { filteredProducts } = useProducts();

  const navigate = useNavigate();
  const { user } = useAuth();
// Inside Home.jsx
const { addToCart } = useCart(); // Get this from context

const handleAddToCart = async (product) => {
  if (!user) {
    // Save the intended destination so they land in the cart after login
    navigate("/login", { state: { from: "/cart" } });
  } else {
    await addToCart(product);
    navigate("/cart");
  }
};

  return (
    <div className="page-container">
      <Navbar />

      <main className="main-content">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-text-content">
            <h1 className="hero-title">
              REVOLUTIONIZE <br /> YOUR TECH WORLD
            </h1>
            <p className="hero-subtitle">
              Discover the Latest Innovation. Fast Shipping.
            </p>
            <button className="hero-btn">SHOP NOW</button>
          </div>

          <div className="hero-img-container">
            <div className="hero-glow"></div>
            <img src={homeMainImg} alt="Featured" className="hero-img" />
          </div>
        </section>

        {/* PRODUCTS */}
        <section style={{ marginTop: "3rem" }}>
          <div className="section-header">
            <h2 className="section-title">FRESH INNOVATIONS</h2>
            <a href="#" className="view-all-link">View All</a>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">

                <div className="product-img-wrapper">
                  <img src={product.img} alt={product.name} className="product-img" />
                </div>

                <h3 className="product-name">{product.name}</h3>
                <p className="product-feature">Feature: cutting-edge tech</p>

                <div className="product-meta">
                  <span className="product-price">{product.price}</span>
                  <div className="rating">
                    ★ <span>{product.rating}</span>
                  </div>
                </div>

                {/* 🔥 UPDATED BUTTON */}
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  <span className="btn-fill"></span>
                  <span className="btn-text">Add to Cart</span>
                </button>

              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;