import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import ListPage from "./pages/ListPage";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import SearchPage from "./pages/SearchPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/fund" element={<ListPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/fund/:fundName" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
