import React, { useEffect, useState } from "react";
import { countries } from "../data/countries";
import "../styles/FlagFrenzy.css";

const TOTAL_QUESTIONS = 10;

const FlagFrenzy = () => {
  const [current, setCurrent] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selected, setSelected] = useState("");
  const [timer, setTimer] = useState(30);
  const [score, setScore] = useState(0);

  useEffect(() => {
    generateQuestion();
  }, [current]);

  useEffect(() => {
    if (timer === 0) {
      handleAnswer(""); // timeout → no selection = wrong
      return;
    }
    const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(countdown);
  }, [timer]);

  const generateQuestion = () => {
    const correct = countries[Math.floor(Math.random() * countries.length)];
    setCorrectAnswer(correct.name);

    const opts = new Set<string>([correct.name]);
    while (opts.size < 4) {
      opts.add(countries[Math.floor(Math.random() * countries.length)].name);
    }

    setOptions(Array.from(opts).sort(() => 0.5 - Math.random()));
    setSelected("");
    setTimer(30);
  };

  const handleAnswer = (option: string) => {
    if (selected) return;
    setSelected(option);

    if (option === correctAnswer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (current + 1 < TOTAL_QUESTIONS) {
        setCurrent(current + 1);
      } else {
        alert(`Game Over!\nYour Score: ${score}/10`);
        setCurrent(0);
        setScore(0);
      }
    }, 1000);
  };

  const getColor = (option: string) => {
    if (!selected) return "";
    if (option === correctAnswer) return "correct";
    if (option === selected) return "wrong";
    return "";
  };

  const timerColor = timer > 20 ? "green" : timer > 10 ? "orange" : "red";

  return (
    <div className="flag-frenzy-wrapper">
      <div className="quiz-progress">Quiz {current + 1}/10</div>
      <div className={`timer ${timerColor}`}>
        00:{timer.toString().padStart(2, "0")}
      </div>

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
              className={`option-btn ${getColor(option)}`}
              onClick={() => handleAnswer(option)}
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
