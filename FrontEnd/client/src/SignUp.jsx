import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

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
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          password,
        }),
      });

      // const data = await response.json();

      if (response.status === 200) {
        alert("Signup successful!");
        navigate("/DashBoard"); // Redirect to the DashBoard or Login page
      } else if (response.status === 500) {
        alert("User already exists, please login");
        navigate("/Logging"); // Redirect to the Logging page
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("User already exists, please login");
      navigate("/signup"); //
    }
  };

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          "url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)",
      }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
        <MDBCardBody className="px-5">
          <form onSubmit={handleSubmit}>
            <h2 className="text-uppercase text-center mb-5">
              Create an account
            </h2>

            <MDBInput
              wrapperClass="mb-4"
              placeholder="Your Name"
              size="lg"
              id="form1"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="alignText"
            />
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Your Email"
              size="lg"
              id="form2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="alignText"
            />
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Password"
              size="lg"
              id="form3"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="alignText"
            />
            <MDBInput
              wrapperClass="mb-4"
              placeholder="Repeat your password"
              size="lg"
              id="form4"
              type="password"
              value={repeatPassword}
              className="alignText"
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <div className="d-flex flex-row justify-content-center mb-4">
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="I agree all statements in Terms of service"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
            </div>
            <MDBBtn
              className="mb-4 w-100 gradient-custom-4"
              size="lg"
              type="submit"
            >
              Register
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUp;
