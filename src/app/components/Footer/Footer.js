// src/app/components/Footer/Footer.js
import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Cột 1: Thông tin liên hệ */}
        <div className={styles.footerCol}>
          <h3>Về Fish Store</h3>
          <p>Cửa hàng cung cấp cá cảnh và phụ kiện thủy sinh uy tín.</p>
          <p style={{ marginTop: "10px" }}>📍 123 Đường Biển Xanh, Quận 1, TP.HCM</p>
          <p>📞 0123 456 789</p>
          <p>✉ lienhe@fishstore.vn</p>
        </div>

        {/* Cột 2: Link nhanh */}
        <div className={styles.footerCol}>
          <h3>Liên Kết Nhanh</h3>
          <ul>
            <li><a href="#">Chính sách giao hàng</a></li>
            <li><a href="#">Chính sách bảo hành</a></li>
            <li><a href="#">Hướng dẫn chăm sóc cá</a></li>
            <li><a href="#">Câu hỏi thường gặp</a></li>
          </ul>
        </div>

        {/* Cột 3: Bản đồ */}
        <div className={styles.footerCol}>
          <h3>Bản Đồ</h3>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps?q=Quận+1+TPHCM&output=embed"
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Phần bản quyền phía dưới */}
      <div className={styles.copyright}>
        © 2026 Fish Store. All Rights Reserved.
      </div>
    </footer>
  );
}