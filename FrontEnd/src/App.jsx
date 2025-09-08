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
import Contact from "./contact";

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
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
// import FrontPage from "./FrontPage";
// import SignUp from "./SignUp";
// import Logging from "./Logging";
// import DashBoard from "./DashBoard";
// import ForgetPassword from "./forgetPassword";
// import TradeJournaling from "./TradeJournaling";
// import PreMarketAnalysis from "./PreMarketAnalysis";
// import TradesHistoryActivityAnalysis from "./TradesHistoryActivityAnalysis";
// import About from "./About";
// import Services from "./Services";
// import ProtectedRoute from "./ProtectedRoute";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check session when app loads
//   useEffect(() => {
//     const checkSession = async () => {
//       try {
//         const res = await fetch(
//           `${import.meta.env.VITE_API_BASE_URL}/serverState/whoami`,
//           {
//             method: "GET",
//             credentials: "include",
//           }
//         );
//         if (res.ok) {
//           const data = await res.json();
//           setIsLoggedIn(!!data.email);
//         } else {
//           setIsLoggedIn(false);
//         }
//       } catch (err) {
//         console.error("Error checking session:", err);
//         setIsLoggedIn(false);
//       }
//     };
//     checkSession();
//   }, []);

//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<FrontPage />} />
//           <Route path="/SignUp" element={<SignUp />} />
//           <Route path="/Logging" element={<Logging />} />

//           {/* Protected Routes */}
//           <Route
//             path="/DashBoard"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn}>
//                 <DashBoard />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/TradeJournaling"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn}>
//                 <TradeJournaling />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/PreMarketAnalysis"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn}>
//                 <PreMarketAnalysis />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/TradesHistoryActivityAnalysis"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn}>
//                 <TradesHistoryActivityAnalysis />
//               </ProtectedRoute>
//             }
//           />

//           {/* Public routes */}
//           <Route path="/ForgetPassword" element={<ForgetPassword />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/Services" element={<Services />} />
//         </Routes>
//       </Layout>
//     </Router>
//   );
// }

// export default App;
