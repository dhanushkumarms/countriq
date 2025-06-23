import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ResultScreen.css";

interface ResultProps {
  score: number;
  onRetake: () => void;
}

const ResultScreen: React.FC<ResultProps> = ({ score, onRetake }) => {
  const navigate = useNavigate();

  return (
    <div className="result-screen">
      <h2 style={{ color: 'black' }}>🎉 Quiz Completed!</h2>
      <p className="score-text">You scored <strong>{score}/10</strong></p>
      <p className="retake-prompt">Think you can beat your score? Let’s give it another go! 🌍</p>

      <div className="button-group">
        <button className="retake-btn" onClick={onRetake}>
          🔁 Retake Quiz
        </button>
        <button className="home-btn" onClick={() => navigate("/")}>
          🏠 Home
        </button>
      </div>
    </div>
  );
};

export default ResultScreen;
