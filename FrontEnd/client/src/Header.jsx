// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import "./App.css";
// import { useNavigate } from "react-router-dom";

// function Header() {
//   const navigate = useNavigate();

//   const handleLogout = async (e) => {
//     e.preventDefault();
//     try {
//       await fetch("http://localhost:3000/logout", {
//         method: "GET",
//         credentials: "include",
//       });
//       navigate("/Logging"); // Redirect to login page
//     } catch (error) {
//       alert("Logout failed", error);
//     }
//   };
//   return (
//     <header className="header">
//       <img src="lock.svg" alt="Company Logo" className="logo" />
//       <nav>
//         <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/about">About</a>
//           </li>
//           <li>
//             <a href="/services">Services</a>
//           </li>
//           <li>
//             <a href="/contact">Contact</a>
//           </li>
//           <li>
//             <a href="#" onClick={handleLogout}>
//               Logout
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./TradeJournaling.css";

function Header() {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/logout", {
        method: "GET",
        credentials: "include",
      });
      navigate("/Logging");
    } catch (error) {
      alert("Logout failed", error);
    }
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <img src="/lock.svg" alt="Logo" className="header-logo" />
        <span className="brand-title">TradeTracker</span>
      </div>

      <nav className="header-nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/services" className="nav-link">
          Services
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
        <a href="#" onClick={handleLogout} className="nav-link logout-link">
          Logout
        </a>
      </nav>
    </header>
  );
}

export default Header;
