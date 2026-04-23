import React, { createContext, useContext, useState } from "react";
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";
import product4 from "../assets/images/product4.png";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    { id: 1, name: "Nova Buds Pro 2", price: "₹ 1999", rating: 4.6, img: product1 },
    { id: 2, name: "Infinity VR Headset", price: "₹ 4999", rating: 3.2, img: product2 },
    { id: 3, name: "Quantum Watch 7", price: "₹ 9999", rating: 4.1, img: product3 },
    { id: 4, name: "Swift Drone X4", price: "₹ 49999", rating: 5, img: product4 },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ProductContext.Provider
      value={{
        products,
        searchQuery,
        setSearchQuery,
        filteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);