import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ResultScreen.css"; // Optional styling

interface ResultProps {
  score: number;
}

const ResultScreen: React.FC<ResultProps> = ({ score }) => {
  const navigate = useNavigate();

  return (
    <div className="result-screen">
      <h2>🎉 Quiz Completed!</h2>
      <p className="score-text">You scored <strong>{score}/10</strong></p>
      <p className="retake-prompt">Think you can beat your score? Let’s give it another go! 🌍</p>
      <button className="retake-btn" onClick={() => navigate("/flag-frenzy")}>
        🔁 Retake Quiz
      </button>
    </div>
  );
};

export default ResultScreen;
