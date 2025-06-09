import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import FrontPage from "./frontPage";
import SignUp from "./SignUp";
import Logging from "./Logging";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Logging" element={<Logging />} />
          {/* <Route path="/Logging" element={<div>Login Page</div>} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
