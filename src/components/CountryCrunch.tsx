import React, { useEffect, useState } from "react";
import { countries } from "../data/countries";
import "../styles/CountryCrunch.css";

const TOTAL_SLOTS = 10;
const TOTAL_TIME = 300;

// Display layout pattern: 1 2 / 4 3 / 5 6 / 8 7 / 9 10
const layoutOrder = [0, 1, 3, 2, 4, 5, 7, 6, 8, 9]; // visual slot pattern

const getRandomCountry = () => {
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex];
};

const CountryCrunch: React.FC = () => {
  const [chain, setChain] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [timer, setTimer] = useState(TOTAL_TIME);
  const [status, setStatus] = useState<("pending" | "correct" | "wrong" | "typing")[]>(
    Array(TOTAL_SLOTS).fill("pending")
  );
  const [startCountry, setStartCountry] = useState(getRandomCountry());

  useEffect(() => {
    setChain([startCountry.name]);
    setStatus((prev) => {
      const updated = [...prev];
      updated[0] = "correct"; // start country always correct
      return updated;
    });
  }, [startCountry]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleTyping = (value: string) => {
    setInput(value);
    if (chain.length < TOTAL_SLOTS) {
      setStatus((prev) => {
        const updated = [...prev];
        updated[chain.length] = value ? "typing" : "pending";
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chain.length >= TOTAL_SLOTS) return;

    const current = chain[chain.length - 1];
    const lastChar = current?.slice(-1).toLowerCase();
    const guess = input.trim();

    const isValid =
      guess.length > 0 &&
      guess[0].toLowerCase() === lastChar &&
      countries.some((c) => c.name.toLowerCase() === guess.toLowerCase()) &&
      !chain.includes(guess);

    const newStatus = [...status];

    if (isValid) {
      setChain([...chain, guess]);
      newStatus[chain.length] = "correct";
      setStatus(newStatus);
    } else {
      newStatus[chain.length] = "wrong";
      setStatus(newStatus);
      setTimeout(() => {
        setStatus((prev) => {
          const updated = [...prev];
          if (updated[chain.length] === "wrong") updated[chain.length] = "pending";
          return updated;
        });
      }, 1000);
    }

    setInput("");
  };

  const timerColor =
    timer > 180 ? "green" : timer > 60 ? "orange" : "red";

  return (
    <div className="country-crunch-container">
      <div className="header-space" />
      <h2 className="title">🌍 Country Crunch</h2>
      <p className="description">
        Start with: <strong>{startCountry.name}</strong>{" "}
        <img src={startCountry.flag} alt="flag" className="flag-icon" />
        <br />
        Type countries where the first letter matches the last of the previous one!
      </p>

      <div className={`timer-box ${timerColor}`}>
        {Math.floor(timer / 60).toString().padStart(2, "0")}:
        {(timer % 60).toString().padStart(2, "0")}
      </div>

      <div className="grid-wrapper">
        {layoutOrder.map((slotIndex, visualIndex) => {
          const value =
            visualIndex === 0
              ? startCountry.name
              : visualIndex === chain.length
              ? input
              : chain[visualIndex] || "";

          return (
            <div
              key={slotIndex}
              className={`grid-box ${status[visualIndex]} box-${slotIndex}`}
              data-pos={slotIndex}
            >
              {value}
            </div>
          );
        })}

        {chain.slice(1).map((_, i) => {
          const from = layoutOrder[i];
          const to = layoutOrder[i + 1];
          return (
            <div
              key={i}
              className={`chain-line line-${from}-${to}`}
            />
          );
        })}
      </div>

      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Enter a country"
          onChange={(e) => handleTyping(e.target.value)}
          className="country-input"
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default CountryCrunch;
