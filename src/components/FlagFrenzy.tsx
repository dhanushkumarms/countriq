import React, { useState, useEffect } from "react";
import { countries } from "../data/countries";
import "./FlagFrenzy.css";
import Timer from "./Timer"; // For animated circular timer (will implement this component too)

const getRandomOptions = (correctIndex) => {
  const options = new Set([correctIndex]);
  while (options.size < 4) {
    const rand = Math.floor(Math.random() * countries.length);
    options.add(rand);
  }
  return Array.from(options).sort(() => 0.5 - Math.random());
};

const FlagFrenzy = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [quiz, setQuiz] = useState([]);
  const [options, setOptions] = useState([]);
  const [timer, setTimer] = useState(30);
  const [showResult, setShowResult] = useState(false);
  const [skipped, setSkipped] = useState([]);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    const selectedFlags = [];
    const used = new Set();
    while (selectedFlags.length < 10) {
      const rand = Math.floor(Math.random() * countries.length);
      if (!used.has(rand)) {
        used.add(rand);
        selectedFlags.push(rand);
      }
    }
    setQuiz(selectedFlags);
  }, []);

  useEffect(() => {
    if (quiz.length > 0) {
      const current = quiz[currentQ];
      setOptions(getRandomOptions(current));
      setSelected(null);
      setTimer(30);
      setFeedback(null);
    }
  }, [currentQ, quiz]);

  useEffect(() => {
    if (timer === 0 && feedback === null) handleSkip();
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const handleSubmit = () => {
    if (selected === quiz[currentQ]) {
      setScore(score + 1);
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }
  };

  const handleNext = () => {
    if (currentQ < quiz.length - 1) {
      setCurrentQ(currentQ + 1);
    } else if (skipped.length > 0) {
      setQuiz([...quiz, ...skipped]);
      setSkipped([]);
      setCurrentQ(quiz.length);
    } else {
      localStorage.setItem("flagfrenzy-best", Math.max(score, localStorage.getItem("flagfrenzy-best") || 0));
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const handleSkip = () => {
    setSkipped([...skipped, quiz[currentQ]]);
    handleNext();
  };

  const restartGame = () => {
    window.location.reload();
  };

  if (quiz.length === 0) return <div className="flagfrenzy-container">Loading...</div>;
  if (showResult) return (
    <div className="result-screen">
      <h2>Your Score: {score}/10</h2>
      <p>Best Score: {localStorage.getItem("flagfrenzy-best")}</p>
      <button onClick={restartGame}>🔁 Retry</button>
      <button onClick={() => window.location.href = "/"}>🏠 Home</button>
    </div>
  );

  const correct = quiz[currentQ];

  return (
    <div className="flagfrenzy-container">
      <div className="header">
        <h2>Flag Frenzy</h2>
        <Timer time={timer} />
      </div>
      <div className="quiz-body">
        <div className="question-number">Question {currentQ + 1}</div>
        <img src={countries[correct].flag} alt="Flag" className="flag-image" />
        <div className="options-grid">
          {options.map((index, i) => (
            <button
              key={i}
              onClick={() => setSelected(index)}
              disabled={feedback !== null}
              className={`option-button
                ${selected === index ? "option-selected" : ""}
                ${feedback && index === quiz[currentQ] ? "option-correct" : ""}
                ${feedback && selected === index && index !== quiz[currentQ] ? "option-wrong" : ""}`}
            >
              {countries[index].name}
            </button>
          ))}
        </div>
      </div>
      <div className="navigation-buttons">
        {currentQ > 0 && <button onClick={handlePrev} className="prev-btn">Previous</button>}
        <button onClick={handleSubmit} className="submit-btn" disabled={feedback !== null}>
          {currentQ === 9 ? "Submit" : "Check"}
        </button>
        {feedback && currentQ < quiz.length && (
          <button onClick={handleNext} className="next-btn">Next</button>
        )}
        {!feedback && (
          <button onClick={handleSkip} className="skip-btn">Skip</button>
        )}
      </div>
    </div>
  );
};

export default FlagFrenzy;
