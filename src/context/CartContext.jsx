import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { addToCartFirestore, getCartFirestore } from "../services/cartService";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const APP_NAME = "Velora"; 

  useEffect(() => {
    if (user) {
      getCartFirestore(user.uid, APP_NAME).then(setCartItems);
    } else {
      setCartItems([]);
    }
  }, [user]);

  const addToCart = async (product) => {
    if (!user) return;
    await addToCartFirestore(user.uid, product, APP_NAME);
    setCartItems((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// ✅ ADD THIS EXPORT - This is what Home.jsx is looking for
export const useCart = () => useContext(CartContext);