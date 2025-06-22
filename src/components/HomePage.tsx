// src/components/HomePage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">


      <div className="card-group">
        <div className="game-card" onClick={() => navigate("/flag-frenzy")}>
          <img src="/ff.png" alt="Flag Frenzy" className="card-image" />
          <h3 className="card-title">🏁 Flag Frenzy</h3>
        </div>

        <div className="game-card" onClick={() => navigate("/country-crunch")}>
          <img src="/cc.png" alt="Country Crunch" className="card-image" />
          <h3 className="card-title">🌐 Country Crunch</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
