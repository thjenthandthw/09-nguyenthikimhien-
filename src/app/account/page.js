"use client";

import React, { useState } from "react";

export default function AccountPage() {
  const [isLogged, setIsLogged] = useState(false);
  const [email, setEmail] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  
  // State giả lập cho thông tin cá nhân
  const [userInfo, setUserInfo] = useState({
    name: "Cá Cảnh Pastel",
    phone: "0123456789",
    gender: "Nam",
    birthday: "2000-01-01"
  });

  function handleLogin(e) {
    e.preventDefault();
    if (!inputEmail.includes("@")) {
      alert("Vui lòng nhập email hợp lệ!");
      return;
    }
    setEmail(inputEmail);
    setIsLogged(true);
  }

  function handleLogout() {
    setIsLogged(false);
    setEmail("");
    setInputEmail("");
  }

  // --- GIAO DIỆN CHƯA ĐĂNG NHẬP (GIỐNG TRANG AUTH) ---
  if (!isLogged) {
    return (
      <div className="auth-container">
        <div className="auth-form">
          <h2>Đăng Nhập</h2>
          <p>Chào mừng bạn quay lại với Fish Store</p>
          
          <div className="social-login">
            <button>🌐 Google</button>
            <button>🔵 Facebook</button>
          </div>
          
          <div className="divider">
            <span>HOẶC</span>
          </div>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email của bạn"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
              required
            />
            <input type="password" placeholder="Mật khẩu" required />
            <button type="submit" className="btn-auth">ĐĂNG NHẬP</button>
          </form>
          
          <p style={{ marginTop: '20px', fontSize: '14px' }}>
            Mới biết đến Fish Store? <span style={{ color: 'var(--pastel-pink-dark)', cursor: 'pointer' }}>Đăng ký ngay</span>
          </p>
        </div>
      </div>
    );
  }

  // --- GIAO DIỆN ĐÃ ĐĂNG NHẬP (GIỐNG SHOPEE ACCOUNT) ---
  return (
    <div className="account-container">
      {/* SIDEBAR BÊN TRÁI */}
      <aside className="account-sidebar">
        <div className="user-avatar">
          <img 
            src="https://api.dicebear.com/7.x/adventurer/svg?seed=Lucky" 
            alt="Avatar" 
          />
          <div>
            <strong style={{ display: 'block' }}>{email.split("@")[0]}</strong>
            <span style={{ fontSize: '12px', color: '#888', cursor: 'pointer' }}>
              ✎ Sửa hồ sơ
            </span>
          </div>
        </div>

        <ul className="account-menu">
          <li className="active">👤 Hồ sơ của tôi</li>
          <li>🏦 Ngân hàng</li>
          <li>📍 Địa chỉ</li>
          <li>🔑 Đổi mật khẩu</li>
          <li>🔔 Cài đặt thông báo</li>
          <li>📜 Đơn mua</li>
          <li onClick={handleLogout} style={{ color: '#ff4d4d', marginTop: '20px', borderTop: '1px solid #eee' }}>
            🚪 Đăng xuất
          </li>
        </ul>
      </aside>

      {/* NỘI DUNG CHÍNH BÊN PHẢI */}
      <main className="account-main">
        <div style={{ borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '20px', color: '#333' }}>Hồ Sơ Của Tôi</h2>
          <p style={{ fontSize: '14px', color: '#666' }}>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
        </div>

        <div style={{ maxWidth: '600px' }}>
          <div className="info-group">
            <label>Tên đăng nhập</label>
            <input type="text" value={email.split("@")[0]} disabled />
          </div>

          <div className="info-group">
            <label>Họ và tên</label>
            <input 
              type="text" 
              value={userInfo.name} 
              onChange={(e) => setUserInfo({...userInfo, name: e.target.value})} 
            />
          </div>

          <div className="info-group">
            <label>Email</label>
            <input type="text" value={email} disabled />
          </div>

          <div className="info-group">
            <label>Số điện thoại</label>
            <input 
              type="text" 
              value={userInfo.phone} 
              onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})} 
            />
          </div>

          <div className="info-group">
            <label>Giới tính</label>
            <div style={{ display: 'flex', gap: '20px', paddingTop: '10px' }}>
              <label style={{ fontWeight: 'normal', cursor: 'pointer' }}>
                <input type="radio" name="gender" defaultChecked /> Nam
              </label>
              <label style={{ fontWeight: 'normal', cursor: 'pointer' }}>
                <input type="radio" name="gender" /> Nữ
              </label>
              <label style={{ fontWeight: 'normal', cursor: 'pointer' }}>
                <input type="radio" name="gender" /> Khác
              </label>
            </div>
          </div>

          <div className="info-group">
            <label>Ngày sinh</label>
            <input 
              type="date" 
              value={userInfo.birthday} 
              onChange={(e) => setUserInfo({...userInfo, birthday: e.target.value})} 
            />
          </div>

          <button 
            className="btn-buy" 
            style={{ width: '150px', padding: '12px', marginTop: '20px' }}
            onClick={() => alert("Đã lưu thông tin thành công!")}
          >
            Lưu hồ sơ
          </button>
        </div>
      </main>

      <style jsx>{`
        .info-group {
          display: grid;
          grid-template-columns: 150px 1fr;
          align-items: center;
          margin-bottom: 25px;
        }
        .info-group label {
          color: #555;
          font-size: 15px;
          margin-bottom: 0;
        }
        .info-group input[type="text"],
        .info-group input[type="date"] {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .info-group input:disabled {
          background-color: #f5f5f5;
          cursor: not-allowed;
        }
        @media (max-width: 768px) {
          .account-container {
            flex-direction: column;
          }
          .info-group {
            grid-template-columns: 1fr;
          }
          .info-group label {
            margin-bottom: 10px;
          }
        }
      `}</style>
    </div>
  );
}