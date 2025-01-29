import { useState } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./CartContext"; 


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); 

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]); // Add product to cart
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id)); // Remove product from cart
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children} 
    </CartContext.Provider>
  );
};


CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
