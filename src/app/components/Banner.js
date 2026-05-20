"use client";
import { useState, useEffect } from "react";
import "./banner.css"; // CSS riêng cho banner

const images = [
  "https://picsum.photos/1200/400?random=1",
  "https://picsum.photos/1200/400?random=2",
  "https://picsum.photos/1200/400?random=3",
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-wrapper">
      {images.map((src, index) => (
        <div
          key={index}
          className={`banner-item ${index === current ? "active" : ""}`}
        >
          <img src={src} alt={`Banner ${index}`} />
          <div className="banner-overlay">
            <h2>Thế Giới Cá Cảnh Pastel</h2>
            <p>Khám phá vẻ đẹp rực rỡ từ đại dương</p>
          </div>
        </div>
      ))}
    </div>
  );
}