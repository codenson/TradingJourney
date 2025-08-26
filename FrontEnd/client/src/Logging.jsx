// // import React from "react";
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { Link } from "react-router-dom";
// // import axios from "axios";
// // import {
// //   MDBContainer,
// //   MDBInput,
// //   MDBCheckbox,
// //   MDBBtn,
// //   MDBIcon,
// // } from "mdb-react-ui-kit";
// // import "./TradeJournaling.css";

// // function Logging() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [rememberMe, setRememberMe] = useState(false);
// //   const navigate = useNavigate();
// //   const handleSubmitLogging = async (e) => {
// //     e.preventDefault();
// //     if (!email || !password) {
// //       alert("Please fill in all fields.");
// //       return;
// //     }

// //     // Replace 'www.google.com' with backend URL for authentication
// //     axios
// //       .post("http://localhost:3000/login", {
// //         email: email,
// //         password: password,
// //       })
// //       .then(function (response) {
// //         // alert(response.status);
// //         if (response.status === 200) {
// //           navigate("/DashBoard");
// //         }
// //       })
// //       .catch(function (error) {
// //         console.log(error);

// //         alert("Login failed. Please try again.");
// //         navigate("/Logging");
// //       });
// //   };
// //   if (rememberMe) {
// //     navigate("/forgetPassword");
// //   }

// //   return (
// //     <>
// //       <h2>Enter Loggin Credentials Below </h2>

// //       <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
// //         <form onSubmit={handleSubmitLogging}>
// //           <div className="flex-container ">
// //             <MDBInput
// //               wrapperClass="mb-4"
// //               placeholder="Email address"
// //               id="form1"
// //               type="email"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="alignText"
// //             />
// //             <MDBInput
// //               wrapperClass="mb-4"
// //               placeholder="Password     "
// //               // id="form2  "
// //               type="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="alignText"
// //             />
// //           </div>

// //           <div className="d-flex justify-content-between mx-3 mb-4">
// //             <MDBCheckbox
// //               name="flexCheck"
// //               value=""
// //               id="flexCheckDefault"
// //               label="Remember me"
// //               checked={rememberMe}
// //               onChange={(e) => setRememberMe(e.target.checked)}
// //             />
// //             {/* <a href="/forgetPassword">Forgot password?</a> */}
// //             <Link to="/ForgetPassword">Forgot password?</Link>
// //           </div>

// //           <MDBBtn className="mb-4">Sign in</MDBBtn>
// //         </form>

// //         <div className="text-center">
// //           <p>
// //             Not a member? <a href="#!">Register</a>
// //           </p>
// //           <p>or sign up with:</p>

// //           <div
// //             className="d-flex justify-content-between mx-auto"
// //             style={{ width: "40%" }}
// //           >
// //             <MDBBtn
// //               tag="a"
// //               color="none"
// //               className="m-1"
// //               style={{ color: "#1266f1" }}
// //             >
// //               <MDBIcon fab icon="facebook-f" size="sm" />
// //             </MDBBtn>

// //             <MDBBtn
// //               tag="a"
// //               color="none"
// //               className="m-1"
// //               style={{ color: "#1266f1" }}
// //             >
// //               <MDBIcon fab icon="twitter" size="sm" />
// //             </MDBBtn>

// //             <MDBBtn
// //               tag="a"
// //               color="none"
// //               className="m-1"
// //               style={{ color: "#1266f1" }}
// //             >
// //               <MDBIcon fab icon="google" size="sm" />
// //             </MDBBtn>

// //             <MDBBtn
// //               tag="a"
// //               color="none"
// //               className="m-1"
// //               style={{ color: "#1266f1" }}
// //             >
// //               <MDBIcon fab icon="github" size="sm" />
// //             </MDBBtn>
// //           </div>
// //         </div>
// //       </MDBContainer>
// //     </>
// //   );
// // }
// // export default Logging;
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import {
//   MDBContainer,
//   MDBInput,
//   MDBCheckbox,
//   MDBBtn,
//   MDBIcon,
// } from "mdb-react-ui-kit";
// import "./TradeJournaling.css";

// function Logging() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmitLogging = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert("Please fill in all fields.");
//       return;
//     }

//     axios
//       .post(
//         "http://localhost:3000/login",
//         { email, password },
//         { withCredentials: true }
//       )
//       .then((response) => {
//         if (response.status === 200) {
//           navigate("/DashBoard");
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         alert("Login failed. Please try again.");
//         navigate("/Logging");
//       });
//   };

//   return (
//     <MDBContainer className="p-4 my-5 d-flex flex-column align-items-center login-container">
//       <h2 className="mb-4">Login</h2>
//       <form onSubmit={handleSubmitLogging} className="w-100">
//         <MDBInput
//           wrapperClass="mb-3"
//           placeholder="Email address"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <MDBInput
//           wrapperClass="mb-3"
//           placeholder="Password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <MDBCheckbox
//             label="Remember me"
//             checked={rememberMe}
//             onChange={(e) => setRememberMe(e.target.checked)}
//           />
//           <Link to="/ForgetPassword" className="text-link">
//             Forgot password?
//           </Link>
//         </div>

//         <MDBBtn type="submit" className="mb-3 w-100">
//           Sign In
//         </MDBBtn>
//       </form>

//       <p className="text-center mt-3">
//         Not a member? <Link to="/signup">Register</Link>
//       </p>

//       <p className="text-center mt-2">or sign in with</p>
//       <div className="d-flex justify-content-center gap-3 mt-2">
//         <MDBBtn color="none" className="icon-btn">
//           <MDBIcon fab icon="facebook-f" />
//         </MDBBtn>
//         <MDBBtn color="none" className="icon-btn">
//           <MDBIcon fab icon="twitter" />
//         </MDBBtn>
//         <MDBBtn color="none" className="icon-btn">
//           <MDBIcon fab icon="google" />
//         </MDBBtn>
//         <MDBBtn color="none" className="icon-btn">
//           <MDBIcon fab icon="github" />
//         </MDBBtn>
//       </div>
//     </MDBContainer>
//   );
// }

// export default Logging;
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Loggin.css";

function Logging() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmitLogging = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        { email, password, rememberMe },

        { withCredentials: true }
      );

      if (response.status === 200) {
        navigate("/DashBoard");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
      navigate("/Logging");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmitLogging}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="login-options">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
          </label>
          <Link to="/ForgetPassword" className="forgot-link">
            Forgot password?
          </Link>
        </div>

        <button type="submit">Sign In</button>

        <p className="text-center">
          Not a member? <Link to="/signup">Register</Link>
        </p>

        <div className="social-login">
          <p>or sign in with</p>
          <div className="social-icons">
            <button type="button">🔵</button>
            <button type="button">🐦</button>
            <button type="button">🟥</button>
            <button type="button">🐙</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Logging;
