// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./styles/SignUp.css";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// function SignUp() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [repeatPassword, setRepeatPassword] = useState("");
//   const [agree, setAgree] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password || !repeatPassword) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     if (password !== repeatPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     try {
//       const response = await fetch(`${API_BASE_URL}/auth/signup`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, name, password }),
//         credentials: "include",
//       });

//       if (response.status === 200) {
//         alert("Signup successful!");
//         navigate("/DashBoard");
//       } else if (response.status === 500) {
//         alert("User already exists, please login");
//         navigate("/Logging");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Signup failed");
//     }
//   };

//   return (
//     <div className="signup-wrapper">
//       <form className="signup-form" onSubmit={handleSubmit}>
//         <h2>Create an Account</h2>

//         <input
//           type="text"
//           placeholder="Your Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <input
//           type="email"
//           placeholder="Your Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Repeat your password"
//           value={repeatPassword}
//           onChange={(e) => setRepeatPassword(e.target.value)}
//         />

//         <label className="checkbox-label">
//           <input
//             type="checkbox"
//             checked={agree}
//             onChange={(e) => setAgree(e.target.checked)}
//           />
//           I agree to the Terms of Service
//         </label>

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default SignUp;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/SignUp.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !repeatPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, password }),
        credentials: "include",
      });

      if (response.status === 200) {
        alert("Signup successful!");
        navigate("/DashBoard");
      } else if (response.status === 500) {
        alert("User already exists, please login");
        navigate("/Logging");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Signup failed");
    }
  };

  return (
    <div className="signup-wrapper">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="input-glow"></div>
        </div>

        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="input-glow"></div>
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="input-glow"></div>
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Repeat your password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
          <div className="input-glow"></div>
        </div>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          I agree to the Terms of Service
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUp;
