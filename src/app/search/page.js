"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { products } from "../data/products";
import { useAppContext } from "../context/CartContext";
import styles from "../page.module.css";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { addToCart } = useAppContext();
  const queryFromUrl = searchParams.get("q") || ""; 
  
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (queryFromUrl) {
      const filtered = products.filter(
        (p) => p.tenSP.toLowerCase().includes(queryFromUrl.toLowerCase())
      );
      setResults(filtered);
    }
  }, [queryFromUrl]);

  return (
    <section style={{ padding: "40px 10%" }}>
      <h1 className={styles.sectionTitle}>Kết quả cho: "{queryFromUrl}"</h1>
      
      {results.length === 0 ? (
        <p style={{ textAlign: 'center' }}>Không tìm thấy sản phẩm nào phù hợp.</p>
      ) : (
        <div className={styles.grid}>
          {results.map((product) => (
            <div key={product.id} className={styles.card}>
              <img src={product.hinhAnh} alt={product.tenSP} />
              <h3>{product.tenSP}</h3>
              <p className={styles.price}>{product.giaSP.toLocaleString()}₫</p>
              
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button className="btn-cart" onClick={() => addToCart(product)}>Thêm Giỏ</button>
                <button className="btn-buy" onClick={() => { addToCart(product); router.push("/cart"); }}>Mua Ngay</button>
              </div>

              {/* Nút Chi tiết cho trang tìm kiếm */}
              <button
                className="btn-detail"
                style={{ marginTop: "10px" }}
                onClick={() => router.push(`/products/${product.id}`)}
              >
                Xem chi tiết
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}