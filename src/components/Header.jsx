import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <h1>Portfolio</h1>

        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/mentions-legales">Mentions légales</Link> 
      </nav>
    </header>
  );
}

export default Header;