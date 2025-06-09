// // import { useState } from "react";
// // import reactLogo from "./assets/react.svg";
// // import viteLogo from "/vite.svg";
// // import "./App.css";
// // import Header from "./Header.jsx";
// // import Footer from "./Footer.jsx";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
// // import FrontPage from "./frontPage.jsx";
// // import SignUp from "./SignUp.jsx";
// // import { Router } from "express";

// // function App() {
// //   // const [count, setCount] = useState(0);

// //   return (
// //     <>
// //       {/* <Router> */}
// //       <Header />
// //       {/* <Routes> */}
// //       {/* <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p> */}
// //       <FrontPage />
// //       <Footer />

// //       <Router>
// //         <switch>
// //           <Route path="/" component={FrontPage} />
// //           <Route path="/SignUp" component={SignUp} />
// //           {/* <Route path="/login" element={<LoginComponent />} /> */}
// //         </switch>
// //       </Router>

// //       {/* </Routes> */}
// //       {/* </Router> */}
// //     </>
// //   );
// // }

// // export default App;
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import FrontPage from "./frontPage";
// import SignUp from "./SignUp";

// function App() {
//   return (
//     <Header />
//     <Router>
//       <Routes>
//         <Route path="/" element={<FrontPage />} />
//         <Route path="/SignUp" element={<SignUp />} />
//         <Route path="/login" element={<div>Login Page</div>} />
//       </Routes>
//     </Router>
//     <Header />
//   );
// }

// export default App;
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
