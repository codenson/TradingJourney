import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
function DashBoard() {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <h2>Loging trading info </h2>
      <div className="flex_buttons">
        <Link to="/TradeJournaling">
          <Button text="Trade Journaling" className="dash_button" />
        </Link>
        <Link to="/PreMarketAnalysis">
          <Button text="Pre Market Analysis" className="dash_button" />
        </Link>
        <Link to="/TradingActityAnalysis">
          <Button text="Trades Activity Analysis" className="dash_button" />
        </Link>
      </div>
    </div>
  );
}

export default DashBoard;
