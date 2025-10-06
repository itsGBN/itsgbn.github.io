import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">itsGBN</div>
      </div>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">☰</label>

      <div className="navbar-right">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
