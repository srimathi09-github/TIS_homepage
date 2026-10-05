import { useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";

import Container from "../common/Container";
import { navigationLinks } from "../../data/schoolData";
import useTheme from "../../hooks/useTheme";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <Container className="navbar-inner">
        {/* Logo */}
        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
          aria-label="Tulas International School Home"
        >
          <span className="brand-mark">T</span>

          <span className="brand-text">
            <strong>TULAS</strong>
            <small>INTERNATIONAL SCHOOL</small>
          </span>
        </a>

        {/* Navigation */}
        <nav
          className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          {/* Theme button for mobile */}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "Switch to dark mode"
                : "Switch to light mode"
            }
          >
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
        </nav>

        {/* Desktop / mobile actions */}
        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle desktop-theme"
            onClick={toggleTheme}
            aria-label={
              theme === "light"
                ? "Switch to dark mode"
                : "Switch to light mode"
            }
          >
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>

          <button
            type="button"
            className="menu-button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;