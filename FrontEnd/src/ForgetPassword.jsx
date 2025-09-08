import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./styles/ForgetPassword.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ForgetPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSendCode = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/forgetPassword`, {
        email,
      });
      if (response.status === 200) {
        setStep(2);
      }
    } catch (err) {
      alert("Error sending reset code. Please try again.");
    }
  };

  const handleVerifyCode = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/verifyCode`, {
        email,
        code,
      });
      if (response.status === 200) {
        setStep(3);
      }
    } catch (err) {
      alert("Invalid code. Try again.");
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/resetPassword`, {
        email,
        code,
        newPassword,
      });
      if (response.status === 200) {
        alert("Password successfully reset! You can now log in.");
        setStep(1);
        setEmail("");
        setCode("");
        setNewPassword("");
      }
    } catch (err) {
      alert("Failed to reset password. Try again.");
    }
  };

  return (
    <div className="forget-wrapper">
      <div className="forget-card">
        <h1 className="forget-title">🔒 Password Reset</h1>

        {step === 1 && (
          <>
            <p className="forget-subtitle">
              Enter your email to receive a verification code.
            </p>
            <input
              type="email"
              className="forget-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSendCode} className="forget-button">
              Send Code
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <p className="forget-subtitle">
              Enter the code sent to <strong>{email}</strong>.
            </p>
            <input
              type="text"
              className="forget-input"
              placeholder="Enter 6-digit code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <button onClick={handleVerifyCode} className="forget-button">
              Verify Code
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <p className="forget-subtitle">Enter your new password below.</p>
            <input
              type="password"
              className="forget-input"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleResetPassword} className="forget-button">
              Reset Password
            </button>
          </>
        )}

        <div className="forget-links">
          <Link to="/Logging">Login</Link>
          <Link to="/SignUp">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
