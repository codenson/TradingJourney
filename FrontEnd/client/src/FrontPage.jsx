import Button from "./Button";
import React from "react";
import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <div className="header-section">
        <h1>Your Trading Journey Starts Here</h1>
      </div>

      <div className="paragraph-section">
        <p>
          Document your trading journey and find meaningful patterns in your
          trading activities through AI and Machine Learning analysis
          integration.
          <br />
          Our platform allows you to log your trades, analyze your performance,
          and gain insights into your trading strategies.
        </p>
      </div>

      <div className="buttons-section">
        <Link to="/SignUp">
          <Button text="Sign Up" />
        </Link>
        <Link to="/Logging">
          <Button text="Login" />
        </Link>
      </div>
    </div>
  );
}

export default FrontPage;
