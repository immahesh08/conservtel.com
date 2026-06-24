// src/App.jsx
import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurServices from "./pages/OurServices";
import "./App.css";
import Employ from "./pages/Employ";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Optional: remember theme in localStorage
    const saved = window.localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <HashRouter>
    <div className={`app ${theme}`}>
      <Router>
        <Navbar onToggleTheme={handleToggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employ" element={<Employ />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    </HashRouter>
  );
};

export default App;
