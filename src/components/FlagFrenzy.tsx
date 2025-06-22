// src/components/FlagFrenzy.tsx
import { useEffect, useState } from "react";
import { countries } from "../data/countries";
import "../styles/FlagFrenzy.css";

const TOTAL_QUESTIONS = 10;

const FlagFrenzy = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);

  // Generate new question
  const generateQuestion = () => {
    const correct = countries[Math.floor(Math.random() * countries.length)];
    setCorrectAnswer(correct.name);

    const opts = new Set<string>([correct.name]);
    while (opts.size < 4) {
      opts.add(countries[Math.floor(Math.random() * countries.length)].name);
    }

    setOptions(Array.from(opts).sort(() => 0.5 - Math.random()));
    setSelected(null);
    setTimer(30);
  };

  // Timer countdown
  useEffect(() => {
    if (timer === 0 && selected === null) {
      handleAnswer(null); // Treat timeout as incorrect answer
      return;
    }

    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, [timer, selected]);

  // Initialize or move to next question
  useEffect(() => {
    generateQuestion();
  }, [currentQuestion]);

  // Determine button color class
  const getColorClass = (option: string) => {
    if (!selected) return "";
    if (option === correctAnswer) return "correct";
    if (option === selected) return "wrong";
    return "";
  };

  const handleAnswer = (option: string | null) => {
    if (selected !== null) return;

    setSelected(option);

    if (option === correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentQuestion < TOTAL_QUESTIONS) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        alert(`Game Over!\nYour score: ${score}/${TOTAL_QUESTIONS}`);
        setCurrentQuestion(1);
        setScore(0);
      }
    }, 1000);
  };

  const timerColor = timer > 20 ? "green" : timer > 10 ? "orange" : "red";

  return (
    <div className="flag-frenzy-wrapper">
      <div className="quiz-progress">Quiz {currentQuestion}/{TOTAL_QUESTIONS}</div>
      <div className={`timer ${timerColor}`}>00:{timer.toString().padStart(2, "0")}</div>

      <div className="flag-frenzy-container">
        <img
          src={countries.find((c) => c.name === correctAnswer)?.flag}
          alt="flag"
          className="flag-image"
        />

        <div className="options-grid">
          {options.map((option, i) => (
            <button
              key={i}
              className={`option-btn ${getColorClass(option)}`}
              onClick={() => handleAnswer(option)}
              disabled={selected !== null}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlagFrenzy;
