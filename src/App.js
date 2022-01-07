import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import FundsPage from "./pages/FundsPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/funds" element={<FundsPage />} />
      </Routes>
    </div>
  );
}

export default App;
