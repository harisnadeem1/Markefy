import React, { createContext, useContext, useState, useEffect } from "react";

// Create Context
const CartContext = createContext();

// Custom hook to use cart anywhere
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // ✅ Initialize directly from localStorage (runs once on mount)
    try {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (err) {
      console.error("Error parsing cart from localStorage", err);
      return [];
    }
  });

  // ✅ Keep cart in sync with localStorage
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (err) {
      console.error("Error saving cart to localStorage", err);
    }
  }, [cart]);

  // Add product (only once)
 // ✅ CartContext.js
const addToCart = (product) => {
  setCart((prev) => {
    if (prev.some((item) => item.id === product.id)) return prev;

    const finalPrice = product.sale_price
      ? Number(product.sale_price)
      : Number(product.regular_price || product.price);

    return [
      ...prev,
      {
        id: product.id,
        name: product.name || product.title,
        preview_url: product.preview_url || product.image,
        regular_price: Number(product.regular_price),
        sale_price: product.sale_price ? Number(product.sale_price) : null,
        price: finalPrice,
      },
    ];
  });
};


  // Remove product
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear all
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); // ✅ ensure it's also removed from storage
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        itemCount: cart.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
