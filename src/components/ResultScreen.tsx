import React from "react";
import { useNavigate } from "react-router-dom";

interface ResultProps {
  score: number;
}

const ResultScreen: React.FC<ResultProps> = ({ score }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>🎉 Game Over!</h2>
      <p>Your score: {score} / 10</p>
      <button onClick={() => navigate("/")}>Play Again</button>
    </div>
  );
};

export default ResultScreen;
