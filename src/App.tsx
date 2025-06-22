import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import FlagFrenzy from "./components/FlagFrenzy";
import CountryCrunch from "./components/CountryCrunch";
// import ResultScreen from "./components/ResultScreen"; // optional

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/flag-frenzy" element={<FlagFrenzy />} />
      <Route path="/country-crunch" element={<CountryCrunch />} />
      {/* <Route path="/result" element={<ResultScreen />} /> */}
    </Routes>
  );
};

export default App;
