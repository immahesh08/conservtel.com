// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ onToggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
<a href="/"><img src="/src/assets/react.svg" alt="Conservtel Logo" /></a>

      <div className="menu-toggle" onClick={handleMenuToggle}>
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/employ" onClick={closeMenu}>
          Employees
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
        {/* Theme toggle button */}
        <li>
          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle-btn"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"} Mode
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
