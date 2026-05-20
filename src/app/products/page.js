"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { products } from "../data/products";
import { useAppContext } from "../context/CartContext";
import styles from "../page.module.css";

function ProductListInner() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const category = searchParams.get("category");

  const { addToCart } = useAppContext();

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  const titleMap = {
    "nuoc-ngot": "Cá Nước Ngọt",
    "nuoc-man": "Cá Nước Mặn",
    "phu-kien": "Phụ Kiện Thủy Sinh",
    "thuc-an": "Thức Ăn & Thuốc",
  };

  return (
    <section className={styles.content}>
      <h1 className={styles.sectionTitle}>
        {category ? titleMap[category] : "Tất Cả Sản Phẩm"}
      </h1>

      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.hinhAnh}
              alt={product.tenSP}
              className={styles.productImage}
            />

            <h3>{product.tenSP}</h3>

            <p className={styles.price}>
              {product.giaSP.toLocaleString()}₫
            </p>

            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "15px",
              }}
            >
              <button
                className="btn-cart"
                onClick={() => addToCart(product)}
              >
                Thêm Giỏ
              </button>

              <button
                className="btn-buy"
                onClick={() => {
                  addToCart(product);
                  router.push("/cart");
                }}
              >
                Mua Ngay
              </button>
            </div>

            <button
              className="btn-detail"
              style={{ marginTop: "10px", width: "100%" }}
              onClick={() => router.push(`/products/${product.id}`)}
            >
              Xem chi tiết sản phẩm
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Đang tải sản phẩm...</div>}>
      <ProductListInner />
    </Suspense>
  );
}