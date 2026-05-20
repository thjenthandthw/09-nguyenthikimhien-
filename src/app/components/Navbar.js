"use client";
import Link from "next/link";
import { useState } from "react";

const productCategories = [
  { name: "Cá Nước Ngọt", slug: "nuoc-ngot" },
  { name: "Cá Nước Mặn", slug: "nuoc-man" },
  { name: "Phụ Kiện Thủy Sinh", slug: "phu-kien" },
  { name: "Thức Ăn & Thuốc", slug: "thuc-an" },
];

export default function Navbar() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <nav className="main-nav">
      <ul className="menu">
        <li><Link href="/">Trang Chủ</Link></li>

        {/* Dropdown Sản Phẩm */}
        <li
          className="dropdown"
          onMouseEnter={() => setShowProducts(true)}
          onMouseLeave={() => setShowProducts(false)}
        >
          {/* Khi click vào sẽ dẫn đến /products hiển thị tất cả sản phẩm */}
          <Link href="/products" className="dropdown-label">
            Sản Phẩm ▼
          </Link>

          {showProducts && (
            <ul className="sub-menu">
              {productCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link href={`/products?category=${cat.slug}`}>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li><Link href="/promotions">Khuyến Mãi</Link></li>
        <li><Link href="/news">Tin Tức</Link></li>
        <li><Link href="/contact">Liên Hệ</Link></li>
      </ul>

      <style jsx>{`
        .menu {
          list-style: none;
          display: flex;
          gap: 30px;
          position: relative;
          margin: 0;
          padding: 0;
          font-family: sans-serif;
        }
        .menu li {
          position: relative;
        }
        .menu li a, .dropdown-label {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          cursor: pointer;
        }
        .menu li a:hover, .sub-menu li a:hover {
          color: #FF6FAF;
        }
        .dropdown-label {
          display: inline-block;
          padding: 5px;
        }
        .sub-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          list-style: none;
          padding: 10px 15px;
          border: 1px solid #ccc;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          z-index: 100;
        }
        .sub-menu li {
          margin: 5px 0;
        }
        .sub-menu li a {
          color: #333;
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}