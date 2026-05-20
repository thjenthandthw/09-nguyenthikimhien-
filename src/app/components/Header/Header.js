"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "../../context/CartContext";
import Link from "next/link";

// 1. Sửa lại đường dẫn CSS (Dùng ./ vì cùng thư mục)
import styles from "./Header.module.css"; 

export default function Header() {
  const router = useRouter();
  const { cart } = useAppContext();
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      router.push(`/search?q=${encodeURIComponent(keyword)}`);
    }
  };

  return (
    <header className="header"> {/* Class này nên nằm trong globals.css hoặc Header.module.css */}
      <div className="logo">
        <Link href="/">
          <h1 style={{ cursor: "pointer" }}>
            🐠 Fish <span>Store</span>
          </h1>
        </Link>
      </div>

      <div className="header-actions">
        <form className="search-bar" onSubmit={handleSearch}>
          <input 
            placeholder="Tìm kiếm cá..." 
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>

        <div className="cart-icon" onClick={() => router.push("/cart")}>
          🛒
          <span className="cart-count">{cart?.length || 0}</span>
        </div>

        <div className="user-icon" onClick={() => router.push("/account")}>
          👤
        </div>
      </div>
    </header>
  );
}