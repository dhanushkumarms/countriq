import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ResultScreen.css";
import confetti from "canvas-confetti";

interface ResultProps {
  score: number;
  onRetake: () => void;
}

const ResultScreen: React.FC<ResultProps> = ({ score, onRetake }) => {
  const navigate = useNavigate();

  const launchConfetti = () => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.3 },
          gravity: 0.3,   // Lower gravity = slower fall (default is ~1)
          decay: 0.8,
          ticks: 100     // Closer to 1 = confetti stays longer before vanishing
        });
      }, i * 400);
    }
  };

  useEffect(() => {
    if (score === 10) {
      launchConfetti();
    }
  }, [score]);

  return (
    <div className="result-screen">
      <h2 style={{ color: 'black', position: 'relative' }}>
        <span
          className="celebration-emoji"
          onClick={launchConfetti}
          title="Click for celebration!"
        >
          🎉
        </span>
        Quiz Completed!
      </h2>
      <p className={`score-text ${score <= 5 ? "low-score" : ""}`}>
        You scored <strong>{score}/10</strong>
      </p>
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
