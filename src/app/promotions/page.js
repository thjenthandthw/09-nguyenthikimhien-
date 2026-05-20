export default function Promotions() {
  const promoData = [
    { title: "Giảm 20% Cá Betta", desc: "Áp dụng đến 30/12", color: "#ffe5ec" },
    { title: "Mua 2 tặng 1", desc: "Dành cho cá Neon", color: "#e2f0d9" },
    { title: "Combo Thức Ăn", desc: "Giảm 15% khi mua từ 2 gói", color: "#fff4e6" },
    { title: "Freeship Toàn Quốc", desc: "Cho đơn hàng từ 500k", color: "#e7f3ff" },
  ];

  return (
    <div style={{ padding: "40px 10%", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <h2 style={{ textAlign: 'center', color: '#ff4d6d', marginBottom: '30px', fontSize: '2rem' }}>
        Chương Trình Khuyến Mãi
      </h2>

      <div className="product-grid">
        {promoData.map((item, index) => (
          <div key={index} className="product-card" style={{ backgroundColor: item.color }}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button className="promo-button">Nhận ưu đãi</button>
          </div>
        ))}
      </div>
    </div>
  );
}