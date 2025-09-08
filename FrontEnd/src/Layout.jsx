import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./styles/index.css";

function Layout({ children }) {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
