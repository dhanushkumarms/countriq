// src/components/Header.tsx
import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle class on body when theme changes
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <header className="header">
      <div className="logo-section">
        <img src="/countriq_logo.png" alt="CountriQ Logo" className="logo-img" />
        <span className="logo-text">CountriQ</span>
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
