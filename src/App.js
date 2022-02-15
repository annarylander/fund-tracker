import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import FundsPage from "./pages/FundsPage";
import DetailPage from "./pages/DetailPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/fund" element={<FundsPage />} />
        <Route path="/fund/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
