import { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  let lastScrollY = window.scrollY;

  // Handle Scroll Behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrollingUp(false); // Hide on scroll down
      } else {
        setIsScrollingUp(true); // Show on scroll up
      }
      //eslint-disable-next-line
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle Menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isScrollingUp ? "" : "hidden"}`}>
      <div className="logo">
        <h1>Kartikey</h1>
      </div>

      {/* Desktop Menu */}
      <div className="desktop-menu">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Works</a>
      </div>

      {/* Mobile Menu Button */}
      <div className="mobile-menu-button">
        <button onClick={toggleMenu}>{isOpen ? "Close" : "Menu"}</button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <a href="#hero" onClick={toggleMenu}>
          Home
        </a>
        <a href="#about" onClick={toggleMenu}>
          About
        </a>
        <a href="#projects" onClick={toggleMenu}>
          Works
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
