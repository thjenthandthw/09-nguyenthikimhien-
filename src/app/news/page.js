"use client"; // ← bắt buộc để dùng styled-jsx và client-side hooks
import Link from "next/link";

const news = [
  { 
    id: 1, 
    title: "Cách nuôi cá Betta cho người mới", 
    desc: "Hướng dẫn chi tiết từ cách chọn bể, thay nước đến chế độ dinh dưỡng giúp cá luôn khỏe mạnh và lên màu đẹp...", 
    date: "20/03/2026",
    image: "https://picsum.photos/400/250?random=1"
  },
  { 
    id: 2, 
    title: "Top 10 dòng cá cảnh đẹp nhất 2026", 
    desc: "Khám phá những dòng cá đang làm mưa làm gió trong cộng đồng thủy sinh năm nay với màu sắc vô cùng ấn tượng...", 
    date: "18/03/2026",
    image: "https://picsum.photos/400/250?random=2"
  },
  { 
    id: 3, 
    title: "Bí quyết xử lý nước hồ cá bị đục", 
    desc: "Nước hồ cá bị đục không chỉ gây mất thẩm mỹ mà còn ảnh hưởng đến sức khỏe của cá. Hãy cùng tìm hiểu nguyên nhân...", 
    date: "15/03/2026",
    image: "https://picsum.photos/400/250?random=3"
  },
];

export default function News() {
  return (
    <div className="news-container">
      <h2 className="news-title">Tin Tức Thủy Sinh</h2>

      <div className="news-grid">
        {news.map((item) => (
          <div key={item.id} className="news-card">
            <div className="news-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="news-content">
              <span className="news-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link href={`/news/${item.id}`} className="read-more">
                Xem chi tiết →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .news-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px 20px;
        }

        .news-title {
          text-align: center;
          font-size: 2.2rem;
          color: #FF6FAF;
          margin-bottom: 40px;
          font-weight: 700;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        .news-card {
          background: #fff;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
        }

        .news-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        }

        .news-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .news-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .news-date {
          font-size: 0.85rem;
          color: #888;
          margin-bottom: 10px;
        }

        .news-content h3 {
          font-size: 1.25rem;
          margin-bottom: 10px;
          color: #333;
        }

        .news-content p {
          flex-grow: 1;
          color: #555;
          font-size: 0.95rem;
          margin-bottom: 15px;
        }

        .read-more {
          color: #FF6FAF;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s;
        }

        .read-more:hover {
          color: #FF3380;
        }

        @media (max-width: 768px) {
          .news-title {
            font-size: 1.8rem;
          }

          .news-card {
            flex-direction: column;
          }

          .news-image img {
            height: 180px;
          }
        }
      `}</style>
    </div>
  );
}