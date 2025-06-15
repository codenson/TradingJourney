import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ForgetPassword() {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    axios
      .post("http://localhost:3000/forgetPassword", { email })
      .then((response) => {
        if (response.status === 200) {
          alert("Password reset link sent to: " + email);
        } else {
          alert("Failed to send password reset link");
        }
      });
    // alert(`Password reset link sent to: ${email}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card text-center" style={{ width: "300px" }}>
        <div className="card-header h5 text-white bg-primary">
          Password Reset
        </div>
        <div className="card-body px-4">
          <p className="card-text py-2">Enter your email address</p>
          <div className="form-outline">
            <input
              type="email"
              id="typeEmail"
              className="form-control my-3 alignText"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button onClick={handleReset} className="btn btn-primary w-100">
            Reset password
          </button>
          <div className="d-flex justify-content-between mt-4">
            <Link to="/Logging">Login</Link>
            <Link to="/SignUp">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
