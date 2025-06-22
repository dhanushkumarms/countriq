// src/components/HomePage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; // ✅ Import external CSS

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">🌍 Welcome to CountriQ</h1>
      <p className="home-subtitle">Choose your quiz mode</p>

      <div className="button-group">
        <button className="home-button" onClick={() => navigate("/flag-frenzy")}>
          🏁 Flag Frenzy
        </button>
        <button className="home-button" onClick={() => navigate("/country-crunch")}>
          🌐 Country Crunch
        </button>
      </div>
    </div>
  );
};

export default HomePage;
