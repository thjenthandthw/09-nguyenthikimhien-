"use client";

import React from "react";
import { useAppContext } from "../context/CartContext"; // Đường dẫn đúng từ cart/ sang context/

export default function CartPage() {
  const context = useAppContext();

  // Kiểm tra an toàn trước khi destructure
  if (!context) return <p>Đang tải...</p>;

  const { cart, removeFromCart } = context;

  if (cart.length === 0) {
    return <div style={{ padding: "50px", textAlign: "center" }}>
             <h2>Giỏ hàng của bạn đang trống 🐠</h2>
           </div>;
  }

  return (
    <section style={{ padding: "40px 10%" }}>
      <h1>Giỏ hàng của bạn</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{item.tenSP}</td>
              <td>{item.giaSP?.toLocaleString()}₫</td>
              <td>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{ color: "red", cursor: "pointer", border: "none", background: "none" }}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}