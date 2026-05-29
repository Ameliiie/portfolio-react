import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <nav className="navbar">

        <h1 className="logo">JOHN DOE</h1>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <NavLink to="/">HOME</NavLink>
          </li>

          <li>
            <NavLink to="/services">SERVICES</NavLink>
          </li>

          <li>
            <NavLink to="/portfolio">PORTFOLIO</NavLink>
          </li>

          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>

          <li>
            <NavLink to="/mentions-legales"> MENTIONS LEGALES</NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;