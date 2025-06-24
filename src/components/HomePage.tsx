import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      
      <div className="game-container">
        
        <h2 className="choose-text">🚀Choose Your Challenge, Explorer!🌍</h2>
        <p className="pick-text">Pick your game below!</p>

        <div className="card-group">
          <div className="card" onClick={() => navigate("/flag-frenzy")}>
            <div className="card-inner">
              <div className="card-front">
                <img src="/ff.png" alt="Flag Frenzy" className="card-image" />
                <h3 className="card-title">🏁 Flag Frenzy</h3>
              </div>
                <div className="card-back">
                  <p>Test your knowledge of world flags. Guess the country from its flag. Fast-paced, fun, and addictive!</p>
                </div>
            </div>
          </div>

          <div className="card" onClick={() => navigate("/country-crunch")}>
            <div className="card-inner">
              <div className="card-front">
                <img src="/cc.png" alt="Country Crunch" className="card-image" />
                <h3 className="card-title">🌐 Country Crunch</h3>
              </div>
              <div className="card-back">
                <p>Create a chain of country names. The first letter must match the last letter of the previous one!</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
