"use client"; // Client component để có thể dùng styled-jsx

export default function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Kết Nối Với Fish Store</h2>

      <div className="contact-wrapper">
        {/* Thông tin liên hệ */}
        <div className="contact-info">
          <h3>Thông Tin Liên Hệ</h3>
          <p>Chúng tôi luôn sẵn sàng lắng nghe và tư vấn cho bạn về thế giới thủy sinh!</p>

          <div className="info-item">
            <strong>Địa chỉ:</strong>
            <p>123 Đường Biển Xanh, Quận 1, TP.HCM</p>
          </div>

          <div className="info-item">
            <strong>Điện thoại:</strong>
            <p>0123 456 789 (Zalo 24/7)</p>
          </div>

          <div className="info-item">
            <strong>Email:</strong>
            <p>lienhe@fishstore.vn</p>
          </div>

          <div className="info-item">
            <strong>Giờ mở cửa:</strong>
            <p>08:00 - 21:00 (Kể cả T7, CN)</p>
          </div>
        </div>

        {/* Form liên hệ */}
        <div className="contact-form">
          <h3>Gửi Lời Nhắn</h3>
          <form onSubmit={(e) => { e.preventDefault(); alert("Cảm ơn bạn! Fish Store sẽ phản hồi sớm nhất ❤️") }}>
            <input type="text" placeholder="Họ và tên" required />
            <input type="email" placeholder="Email của bạn" required />
            <input type="text" placeholder="Chủ đề tư vấn" />
            <textarea rows="5" placeholder="Bạn cần Fish Store hỗ trợ gì nè..." required></textarea>
            <button type="submit" className="btn-submit">Gửi Tin Nhắn Ngay</button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px 20px;
        }

        .contact-title {
          text-align: center;
          font-size: 2rem;
          color: #FF6FAF;
          margin-bottom: 40px;
          font-weight: 700;
        }

        .contact-wrapper {
          display: flex;
          gap: 40px;
          flex-wrap: wrap;
        }

        .contact-info, .contact-form {
          background: #fff;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          flex: 1 1 400px;
        }

        .contact-info h3, .contact-form h3 {
          margin-bottom: 20px;
          color: #FF6FAF;
        }

        .info-item {
          margin-bottom: 15px;
        }

        .info-item strong {
          display: block;
          margin-bottom: 5px;
          color: #333;
        }

        .info-item p {
          margin: 0;
          color: #555;
        }

        .contact-form form {
          display: flex;
          flex-direction: column;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 12px 15px;
          margin-bottom: 15px;
          border: 1px solid #ddd;
          border-radius: 10px;
          font-size: 0.95rem;
          transition: border-color 0.3s, box-shadow 0.3s;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #FF6FAF;
          box-shadow: 0 0 5px rgba(255,111,175,0.3);
          outline: none;
        }

        .btn-submit {
          background: #FF6FAF;
          color: #fff;
          font-weight: 700;
          padding: 12px 0;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
        }

        .btn-submit:hover {
          background: #FF3380;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .contact-wrapper {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}