import React, { useEffect, useState } from "react";
import { countries } from "../data/countries";
import "../styles/CountryCrunch.css";

const TOTAL_SLOTS = 10;
const TOTAL_TIME = 300; // 5 minutes in seconds

const getRandomCountry = () => {
  const randomIndex = Math.floor(Math.random() * countries.length);
  return countries[randomIndex].name;
};

const CountryCrunch: React.FC = () => {
  const [chain, setChain] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [timer, setTimer] = useState(TOTAL_TIME);
  const [status, setStatus] = useState<("pending" | "correct" | "wrong")[]>(Array(TOTAL_SLOTS).fill("pending"));
  const [startCountry, setStartCountry] = useState(getRandomCountry());

  // Set first country when page loads
  useEffect(() => {
    setChain([startCountry]);
  }, [startCountry]);

  // Timer countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const current = chain[chain.length - 1];
    const lastChar = current?.slice(-1).toLowerCase();
    const isValid = input.length > 0 &&
      input[0].toLowerCase() === lastChar &&
      countries.some((c) => c.name.toLowerCase() === input.toLowerCase()) &&
      !chain.includes(input);

    if (chain.length >= TOTAL_SLOTS + 1) return;

    if (isValid) {
      setChain([...chain, input]);
      setStatus((prev) => {
        const updated = [...prev];
        updated[chain.length] = "correct";
        return updated;
      });
    } else {
      setStatus((prev) => {
        const updated = [...prev];
        updated[chain.length] = "wrong";
        return updated;
      });
    }

    setInput("");
  };

  const timerColor =
    timer > 180 ? "green" : timer > 60 ? "orange" : "red";

  return (
    <div className="country-crunch-container">
      <h2 className="title">🌍 Country Crunch Challenge</h2>
      <p className="description">Continue the chain! Each country must start with the last letter of the previous one.</p>
      <div className={`timer-box ${timerColor}`}>
        {Math.floor(timer / 60)
          .toString()
          .padStart(2, "0")}
        :
        {(timer % 60).toString().padStart(2, "0")}
      </div>

      <div className="chain-grid">
        {Array.from({ length: TOTAL_SLOTS }).map((_, index) => (
          <div key={index} className={`slot ${status[index]}`}>
            <span>{chain[index + 1] || ""}</span>
            {status[index] === "correct" && <span className="tick">✅</span>}
            {status[index] === "wrong" && <span className="tick wrong">❌</span>}
          </div>
        ))}
      </div>

      <form className="input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Enter a country"
          onChange={(e) => setInput(e.target.value)}
          className="country-input"
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default CountryCrunch;
