// src/components/Header.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ⬅️ Add this
import "../styles/Header.css";

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate(); // ⬅️ Initialize navigator

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <header className="header">
      <div className="logo-section" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img src="/countriq_logo.png" alt="CountriQ Logo" className="logo-img" />
        <span className="logo-text"></span>
      </div>

      <div className="message-section">
        <div className="marquee-container">
          <div className="marquee-text">
            🌍 Welcome to countrIQ — A dedicated quiz platform about countries & flags 🇮🇳!
          </div>
        </div>
      </div>

      <div className="theme-toggle">
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider round"></span>
        </label>
        <span className="theme-label">{darkMode ? "Dark" : "Light"}</span>
      </div>
    </header>
  );
};

export default Header;
