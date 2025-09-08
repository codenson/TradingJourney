import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./styles/Header.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Header() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${API_BASE_URL}/auth/logout`, {
        method: "GET",
        credentials: "include",
      });
      navigate("/Logging");
    } catch (error) {
      alert("Logout failed", error);
    }
  };

  const handleHomeClick = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE_URL}/serverState/whoami`, {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();
      if (!data.email) {
        navigate("/Logging");
      } else {
        navigate("/DashBoard");
      }
    } catch (err) {
      console.error("Error checking session:", err);
      navigate("/Logging");
    }
  };

  // Close mobile menu when a link is clicked
  const handleNavClick = () => setMobileOpen(false);

  return (
    <header className="modern-header">
      <div className="header-container container">
        <div className="header-left">
          <div className="logo-container">
            <img src="/lock.svg" alt="Logo" className="header-logo" />
            <span className="brand-title">TradeTracker</span>
          </div>
        </div>

        <nav className={`header-nav${mobileOpen ? " open" : ""}`}>
          <Link
            to="/DashBoard"
            className="nav-link"
            onClick={(e) => {
              handleHomeClick(e);
              handleNavClick();
            }}
          >
            <span className="nav-text">Home</span>
          </Link>
          <Link to="/about" className="nav-link" onClick={handleNavClick}>
            <span className="nav-text">About</span>
          </Link>
          <Link to="/services" className="nav-link" onClick={handleNavClick}>
            <span className="nav-text">Services</span>
          </Link>
          <Link to="/contact" className="nav-link" onClick={handleNavClick}>
            <span className="nav-text">Contact</span>
          </Link>
          <button
            onClick={(e) => {
              handleLogout(e);
              handleNavClick();
            }}
            className="nav-link logout-btn"
          >
            <span className="nav-text">Logout</span>
          </button>
        </nav>

        {/* Mobile menu button */}
        <div
          className="mobile-menu-btn"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
