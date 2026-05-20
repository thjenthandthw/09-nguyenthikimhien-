// src/app/layout.js
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner";
import { AppWrapper } from "./context/CartContext"; // Thêm dòng này

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        {/* Bọc toàn bộ ứng dụng vào AppWrapper */}
        <AppWrapper>
          <Header />
          <Banner />
          <Navbar />
          <main style={{ minHeight: "80vh" }}>
            {children}
          </main>
          <Footer />
        </AppWrapper>
      </body> 
    </html>
  );
}