// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // function PreMarketAnalysis() {
// //   const [text, setText] = useState("");

// //   //   useEffect(() => {
// //   //     axios
// //   //       .get("http://localhost:3000/PreMarketAnalysis")
// //   //       .then((response) => {
// //   //         setText(response.data.PreMarketAnalysis); // ✅ extract string from object
// //   //       })
// //   //       .catch((error) => {
// //   //         console.error("Error fetching analysis:", error);
// //   //       });
// //   //   }, []);
// //   useEffect(() => {
// //     axios
// //       .get("http://127.0.0.1:5000/LLM")
// //       .then((response) => {
// //         setText(response.data.PreMarketAnalysis);
// //       })
// //       .catch((error) => {
// //         console.error("Error fetching analysis:", error);
// //       });
// //   }, []);

// //   return (
// //     <div className="pre-market-analysis">
// //       <h2>Pre-Market Analysis</h2>
// //       <p>Here you can find insights and analysis on pre-market trends.</p>
// //       <pre style={{ whiteSpace: "pre-wrap" }}>{text}</pre>{" "}
// //     </div>
// //   );
// // }

// // export default PreMarketAnalysis;
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function PreMarketAnalysis() {
//   const [text, setText] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchAnalysis = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         const response = await axios.get("http://127.0.0.1:5000/LLM");
//         console.log("Response:", response.data);

//         // Handle the response structure
//         if (response.data.PreMarketAnalysis) {
//           setText(response.data.PreMarketAnalysis);
//         } else if (typeof response.data === "string") {
//           setText(response.data);
//         } else {
//           setText(JSON.stringify(response.data, null, 2));
//         }
//       } catch (error) {
//         console.error("Error fetching analysis:", error);
//         setError(error.message || "Failed to fetch analysis");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAnalysis();
//   }, []);

//   if (loading) {
//     return (
//       <div className="pre-market-analysis">
//         <h2>Pre-Market Analysis</h2>
//         <p>Loading analysis...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="pre-market-analysis">
//         <h2>Pre-Market Analysis</h2>
//         <p style={{ color: "red" }}>Error: {error}</p>
//         <button onClick={() => window.location.reload()}>Retry</button>
//       </div>
//     );
//   }

//   return (
//     <div className="pre-market-analysis">
//       <h2>Pre-Market Analysis</h2>
//       <p>Here you can find insights and analysis on pre-market trends.</p>
//       <pre
//         style={{
//           whiteSpace: "pre-wrap",
//           backgroundColor: "#f5f5f5",
//           padding: "10px",
//           borderRadius: "5px",
//         }}
//       >
//         {text}
//       </pre>
//     </div>
//   );
// }

// export default PreMarketAnalysis;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TradeJournaling.css"; // Reusing the shared style

function PreMarketAnalysis() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        setLoading(true);
        setError(null);

        // const response = await axios.get("http://127.0.0.1:5000/LLM");
        const response = await axios.get(
          "http://localhost:3000/PreMarketAnalysis"
        );
        console.log("Response:", response.data);

        if (response.data.PreMarketAnalysis) {
          setText(response.data.PreMarketAnalysis);
        } else if (typeof response.data === "string") {
          setText(response.data);
        } else {
          setText(JSON.stringify(response.data, null, 2));
        }
      } catch (error) {
        console.error("Error fetching analysis:", error);
        setError(error.message || "Failed to fetch analysis");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalysis();
  }, []);

  return (
    <div className="pre-market-analysis">
      <h2>Pre-Market Analysis</h2>
      <p>Here you can find insights and analysis on pre-market trends.</p>

      {loading && <p className="status-message">Loading analysis...</p>}

      {error && (
        <>
          <p className="error-message">⚠️ Error: {error}</p>
          <button
            className="upload-button"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </>
      )}

      {!loading && !error && <pre className="analysis-output">{text}</pre>}
    </div>
  );
}

export default PreMarketAnalysis;
