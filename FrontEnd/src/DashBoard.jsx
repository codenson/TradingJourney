import React from "react";
import { Link } from "react-router-dom";
import "./styles/DashBoard.css";

function DashBoard() {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-card">
        <h1>Welcome to the Dashboard</h1>
        <h2>Logging trading info</h2>
        <div className="dashboard-buttons">
          <Link to="/TradeJournaling" className="dash-link">
            Trade Journaling
          </Link>
          <Link to="/PreMarketAnalysis" className="dash-link">
            Pre Market Analysis
          </Link>
          <Link to="/TradesHistoryActivityAnalysis" className="dash-link">
            Trades Activity Analysis
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
