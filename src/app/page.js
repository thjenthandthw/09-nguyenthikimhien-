"use client"; // Cần thiết nếu bạn dùng các hiệu ứng click hoặc tương tác

import React from "react";
import styles from "./page.module.css";
import { products } from "./data/products"; // Import dữ liệu cá
import Header from "./components/Header/Header"; // Gọi Component đã tách

// XÓA DÒNG IMPORT HEADER Ở ĐÂY

export default function ProductPage() {
  return (
    <main className={styles.main}>
      {/* 1. BANNER CHUNG (Đã có ở Layout nhưng nếu bạn muốn tiêu đề khác thì để ở đây) */}
      <div className={styles.banner}>
        <h2 id="bannerTitle">Thế Giới Thủy Sinh Thu Nhỏ</h2>
        <p>Mang thiên nhiên vào ngôi nhà của bạn</p>
      </div>

      {/* 2. TRANG CHỦ / PHẦN GIỚI THIỆU VÀ 2 ẢNH PROMO */}
      <section className={styles.home}>
        <h2 className={styles.sectionTitle}>Chào Mừng Đến Với Fish Store</h2>
        <div className={styles.homeContent}>
          <p>
            Fish Store tự hào là điểm đến lý tưởng cho những người yêu thích cá cảnh
            và nghệ thuật thủy sinh. Chúng tôi cung cấp hàng trăm loài cá tuyệt đẹp,
            các loại cây thủy sinh xanh mát cùng hệ thống phụ kiện hồ cá đạt chuẩn chất lượng cao nhất.
          </p>
        </div>

        {/* ĐÂY LÀ 2 CÁI ẢNH BẠN ĐANG TÌM */}
        <div className={styles.promoGallery}>
          <img
            src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Hồ thủy sinh tại cửa hàng"
            className={styles.promoImg} 
          />
          <img
            src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Các loại cá cảnh cao cấp"
            className={styles.promoImg}
          />
        </div>
      </section>

      {/* 3. DANH SÁCH SẢN PHẨM */}
      <section className={styles.content}>
        <h1 className={styles.sectionTitle}>Danh Sách Sản Phẩm</h1>
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <img src={product.hinhAnh} alt={product.tenSP} className={styles.cardImg} />
              <h3>{product.tenSP}</h3>
              <p className={styles.price}>{product.giaSP.toLocaleString()}₫</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}