"use client";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function NewsDetail() {
  const { id } = useParams();
  const router = useRouter();

  return (
    <div className="detail-wrapper">
      <div className="detail-container">
        <button onClick={() => router.back()} className="back-link">
          ← Quay lại danh sách
        </button>
        
        <header className="detail-header">
          <span className="detail-category">Kiến thức chuyên sâu</span>
          <h1>Chi tiết bài viết số {id}</h1>
          <p className="detail-meta">Đăng ngày 20/03/2026 • Bởi Admin</p>
        </header>

        <div className="detail-hero-image">
          <img src={`https://picsum.photos/1000/500?random=${id}`} alt="Featured" />
        </div>

        <div className="detail-body">
          <p>Đây là nội dung chi tiết của bài viết có ID là <b>{id}</b>.</p>
          <p>Trong thực tế, bạn sẽ dùng ID này để gọi API hoặc lấy dữ liệu từ file <code>data.js</code> để hiển thị nội dung đầy đủ của bài viết tại đây.</p>
          <p style={{ textAlign: 'justify' }}>
            Cá cảnh không chỉ là vật nuôi, mà còn là một tác phẩm nghệ thuật sống động. 
            Việc chăm sóc chúng đòi hỏi sự tỉ mỉ và kiến thức vững vàng về hệ sinh thái nước...
          </p>
        </div>
      </div>
    </div>
  );
}