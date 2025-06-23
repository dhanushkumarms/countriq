import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import FlagFrenzy from "./components/FlagFrenzy";
import CountryCrunch from "./components/CountryCrunch";
import Footer from "./components/Footer"; // ✅ Footer import
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flag-frenzy" element={<FlagFrenzy />} />
        <Route path="/country-crunch" element={<CountryCrunch />} />
      </Routes>
      <Footer /> {/* ✅ Add Footer here */}
    </>
  );
};

export default App;
