import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./styles/Logging.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Logging() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmitLogging = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/login`,
        { email, password, rememberMe },
        { withCredentials: true }
      );

      if (response.status === 200) {
        setTimeout(() => {
          navigate("/DashBoard");
        }, 500);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="modern-login-wrapper">
      <div className="login-background">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      <div className="login-container">
        <form className="modern-login-form" onSubmit={handleSubmitLogging}>
          <div className="form-header">
            <div className="logo-section">
              <img src="/lock.svg" alt="Logo" className="login-logo" />
              <h1 className="login-title">Welcome Back</h1>
            </div>
            <p className="login-subtitle">
              Sign in to your TradeTracker account
            </p>
          </div>

          <div className="form-fields">
            <div className="input-group">
              <div className="input-icon">📧</div>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="modern-input"
                required
              />
            </div>

            <div className="input-group">
              <div className="input-icon">🔒</div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="modern-input"
                required
              />
            </div>

            <div className="login-options">
              <label className="checkbox-container">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="checkmark"></span>
                Remember me
              </label>
              <Link to="/ForgetPassword" className="forgot-link">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className={`modern-submit-btn ${isLoading ? "loading" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? <div className="loading-spinner"></div> : "Sign In"}
            </button>
          </div>

          <div className="form-footer">
            <p className="register-text">
              Not a member?
              <Link to="/signup" className="register-link">
                Create Account
              </Link>
            </p>

            <div className="divider">
              <span>or continue with</span>
            </div>

            <div className="social-login">
              <button type="button" className="social-btn google">
                <span className="social-icon">🔵</span>
                Google
              </button>
              <button type="button" className="social-btn twitter">
                <span className="social-icon">🐦</span>
                Twitter
              </button>
              <button type="button" className="social-btn github">
                <span className="social-icon">🐙</span>
                GitHub
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Logging;
