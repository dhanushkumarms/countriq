import React, { useState } from "react";

const CountryCrunch: React.FC = () => {
  const [chain, setChain] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) return;

    const lastCountry = chain[chain.length - 1];
    const valid =
      !lastCountry || input[0].toLowerCase() === lastCountry.slice(-1).toLowerCase();

    if (valid) {
      setChain([...chain, input]);
      setInput("");
    } else {
      alert("Oops! Country must start with the last letter of the previous one.");
    }
  };

  return (
    <div>
      <h2>🔤 Country Crunch</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Enter a country"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h4>Chain:</h4>
        <p>{chain.join(" → ") || "Start the chain!"}</p>
      </div>
    </div>
  );
};

export default CountryCrunch;
