import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">
      
      <div className="game-container">        
        <div className="card-group">
          
          {/* Flag Frenzy Card */}
          <div className="card" onClick={() => navigate("/flag-frenzy")}>
            <div className="card-inner">
              <div className="card-front">
                <img src="/ff.png" alt="Flag Frenzy" className="card-image" />
                <div className="title-container">
                  <h3 className="card-title">🏁 Flag Frenzy</h3>
                </div>             
              </div>
              <div className="card-back">
                <p>Test your knowledge of world flags. Guess the country from its flag. Fast-paced, fun, and addictive!</p>
              </div>
            </div>
          </div>

          {/* Country Crunch Card */}
          <div className="card" onClick={() => navigate("/country-crunch")}>
            <div className="card-inner">
              <div className="card-front">
                <img src="/cc.png" alt="Country Crunch" className="card-image" />
                <div className="title-container">
                  <h3 className="card-title">🌐 Country Crunch</h3>
                </div>
              </div>
              <div className="card-back">
                <p>Create a chain of country names. The first letter must match the last letter of the previous one!</p>
              </div>
            </div>
          </div>

        </div>

        <h2 className="choose-text">🌍Choose Your Challenge, Explorer!🚀</h2>
        <p className="pick-text">Ready. Set. Play. !!!</p>

      </div>
    </div>
  );
};

export default HomePage;
