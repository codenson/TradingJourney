import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

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

    // Replace 'www.google.com' with backend URL for authentication
    axios
      .post("http://localhost:3000/login", {
        email: email,
        password: password,
      })
      .then(function (response) {
        // alert(response.status);
        if (response.status === 200) {
          navigate("/DashBoard");
        }
      })
      .catch(function (error) {
        console.log(error);

        alert("Login failed. Please try again.");
        navigate("/Logging");
      });
  };
  if (rememberMe) {
    navigate("/forgetPassword");
  }

  return (
    <>
      <h2>Enter Loggin Credentials Below </h2>

      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <form onSubmit={handleSubmitLogging}>
          <div className="flex-container ">
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Email address"
              id="form1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="alignText"
            />
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Password     "
              // id="form2  "
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="alignText"
            />
          </div>

          <div className="d-flex justify-content-between mx-3 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            {/* <a href="/forgetPassword">Forgot password?</a> */}
            <Link to="/ForgetPassword">Forgot password?</Link>
          </div>

          <MDBBtn className="mb-4">Sign in</MDBBtn>
        </form>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>

          <div
            className="d-flex justify-content-between mx-auto"
            style={{ width: "40%" }}
          >
            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="m-1"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
        </div>
      </MDBContainer>
    </>
  );
}
export default Logging;
