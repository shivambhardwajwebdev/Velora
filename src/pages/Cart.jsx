import React from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import "./Cart.css"; // Import the stunning new styles

const Cart = () => {
  const { cartItems } = useCart();

  return (
    <div className="page-container">
      <Navbar />
      <main className="cart-content">
        <h1>Your Tech Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-state">
            <p>Your cart is empty. Go find some innovation!</p>
          </div>
        ) : (
          <>
            <div className="cart-list">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.img} alt={item.name} />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </>
        )}
      </main>
    </div>
  );
};

export default Cart;