import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ListPage from "./pages/ListPage";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/fund" element={<ListPage />} />
        <Route path="/fund/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
