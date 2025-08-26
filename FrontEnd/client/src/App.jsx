import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import FrontPage from "./FrontPage";
import SignUp from "./SignUp";
import Logging from "./Logging";
import DashBoard from "./DashBoard";
import ForgetPassword from "./forgetPassword";
import TradeJournaling from "./TradeJournaling";
import PreMarketAnalysis from "./PreMarketAnalysis";
import TradesHistoryActivityAnalysis from "./TradesHistoryActivityAnalysis";
import About from "./About";
import Services from "./Services";

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
          <Route path="/TradeJournaling" element={<TradeJournaling />} />
          <Route path="/PreMarketAnalysis" element={<PreMarketAnalysis />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route
            path="/TradesHistoryActivityAnalysis"
            element={<TradesHistoryActivityAnalysis />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
