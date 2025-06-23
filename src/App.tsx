import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // ✅ Import the header
import HomePage from "./components/HomePage";
import FlagFrenzy from "./components/FlagFrenzy";
import CountryCrunch from "./components/CountryCrunch";
import ResultScreen from "./components/ResultScreen";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Header /> {/* ✅ Add this */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flag-frenzy" element={<FlagFrenzy />} />
        <Route path="/country-crunch" element={<CountryCrunch />} />
      </Routes>
    </>
  );
};

export default App;
