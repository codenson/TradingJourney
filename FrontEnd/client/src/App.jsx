import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import FrontPage from "./frontPage";
import SignUp from "./SignUp";
import Logging from "./Logging";
import DashBoard from "./DashBoard";
import ForgetPassword from "./forgetPassword";
import TradeJournaling from "./TradeJournaling";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Logging" element={<Logging />} />
          <Route path="/Logging" element={<Logging />} />
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          {/* <Route path="/TradingJournaling" element={<TradeJournaling />} /> */}
          <Route path="/TradeJournaling" element={<TradeJournaling />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
