import { Link } from "react-router-dom";
import "../styles/Header.css";


function Header() {
  return (
    <header className="header">
      <nav className="navbar">

        <h1 className="logo">JOHN DOE</h1>

        <ul className="nav-links">

          <li>
            <Link to="/">HOME</Link>
          </li>

          <li>
            <Link to="/services">SERVICES</Link>
          </li>

          <li>
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>

          <li>
            <Link to="/contact">CONTACT</Link>
          </li>

          <li>
            <Link to="/mentions-legales"> MENTIONS LEGALES</Link>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;