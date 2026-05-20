"use client";

import { useParams, useRouter } from "next/navigation";
import { products } from "../../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();

  const sp = products.find((p) => p.id.toString() === id);

  if (!sp) {
    return <p style={{ padding: 20 }}>Không tìm thấy sản phẩm</p>;
  }

  return (
    <main style={{ maxWidth: 1000, margin: "40px auto", padding: "0 20px" }}>
      {/* Back */}
      <div
        onClick={() => router.back()}
        style={{
          cursor: "pointer",
          marginBottom: 20,
          color: "#FF6FAF",
          fontWeight: 600,
        }}
      >
        ← Quay lại
      </div>

      <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
        {/* Image */}
        <div style={{ flex: 1, minWidth: 300 }}>
          <img
            src={sp.hinhAnh}
            alt={sp.tenSP}
            style={{
              width: "100%",
              borderRadius: 15,
              objectFit: "cover",
            }}
          />
        </div>

        {/* Info */}
        <div style={{ flex: 1, minWidth: 300 }}>
          <h2 style={{ color: "#FF6FAF" }}>{sp.tenSP}</h2>

          <p
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#FF4F9A",
              margin: "10px 0",
            }}
          >
            {sp.giaSP.toLocaleString()}đ
          </p>

          {/* 🔥 THÊM CHI TIẾT */}
          <div style={{ marginBottom: 15 }}>
            <p><b>Mã sản phẩm:</b> {sp.maSP}</p>
            <p><b>Danh mục:</b> {sp.category}</p>
          </div>

          <p style={{ color: "#555", lineHeight: 1.6 }}>{sp.moTa}</p>

          {/* 🔥 MÔ TẢ MỞ RỘNG */}
          <div style={{ marginTop: 20 }}>
            <h4 style={{ color: "#FF6FAF" }}>Chi tiết sản phẩm</h4>
            <ul style={{ color: "#555", lineHeight: 1.8 }}>
              <li>Sản phẩm chất lượng cao</li>
              <li>Dễ chăm sóc, phù hợp người mới</li>
              <li>Đảm bảo nguồn gốc rõ ràng</li>
              <li>Hỗ trợ tư vấn kỹ thuật miễn phí</li>
            </ul>
          </div>

          <div style={{ marginTop: 20, display: "flex", gap: 15 }}>
            <button
              style={{
                padding: "12px 25px",
                border: "none",
                borderRadius: 8,
                backgroundColor: "#FF6FAF",
                color: "#fff",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Mua ngay
            </button>

            <button
              style={{
                padding: "12px 25px",
                border: "2px solid #FF6FAF",
                borderRadius: 8,
                backgroundColor: "#fff",
                color: "#FF6FAF",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Thêm giỏ
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}