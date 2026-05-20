"use client";
import { createContext, useContext, useState } from "react";

// 1. Phải export CartContext để các file khác có thể nhận diện
export const CartContext = createContext();

export function AppWrapper({ children }) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`Đã thêm ${product.tenSP} vào giỏ!`);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 2. Đảm bảo 'value' chứa tất cả các biến bạn muốn dùng
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        user,
        setUser,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(CartContext);
  // Nếu dùng ngoài Provider, báo lỗi rõ ràng hơn
  if (!context) {
    console.error("useAppContext must be used within an AppWrapper");
  }
  return context;
}