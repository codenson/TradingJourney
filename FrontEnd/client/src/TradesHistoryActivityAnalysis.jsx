// import React, { useState } from "react";
// import axios from "axios";

// function TradesHistoryActivityAnalysis() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [analysisResult, setAnalysisResult] = useState("");

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleFileUpload = () => {
//     if (!selectedFile) return;

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     axios
//       .post("/api/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       })
//       .then((response) => {
//         console.log("File uploaded successfully:", response.data);
//         // Handle success (e.g., show success message, update UI)
//       })
//       .catch((error) => {
//         console.error("Error uploading file:", error);
//         // Handle error (e.g., display error message)
//       });
//   };
//   const getAnalysis = () => {
//     axios
//       .get("http://localhost:3000/TradingAnalysis")
//       .then((response) => {
//         console.log("Analysis:", response.data);
//         setAnalysisResult(response.data);
//         // Handle analysis data (e.g., display in UI)
//       })
//       .catch((error) => {
//         console.error("Error fetching analysis:", error);
//         // Handle error (e.g., display error message)
//       });
//   };

//   return (
//     <div className="upload-container">
//       <div className="upload-input">
//         <h2>Upload Trades History Activity </h2>
//         <input
//           type="file"
//           onChange={handleFileChange}
//           className=" upload-input"
//         />
//         <p>
//           Please upload your trades history activity file in CSV format. The
//           file should contain the following columns: Date, Symbol, Action,
//           Quantity, Price, and Notes.
//         </p>
//       </div>
//       <div className="upload-input">
//         <button onClick={handleFileUpload} className=" upload-input">
//           Upload
//         </button>
//       </div>

//       <div className="upload-output">
//         <h2>
//           Click button below to get detailed analysis of your trading habits and
//           patterns
//         </h2>
//         <button className="upload-input" onClick={getAnalysis}>
//           Click Me for Analysis
//         </button>
//         <p>
//           <h3> Results of your trading habits and patterns are shown below</h3>
//           <p>{analysisResult.message}</p>
//           {/* <pre>{JSON.stringify(analysisResult, null, 2)}</pre> */}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default TradesHistoryActivityAnalysis;
import React, { useState } from "react";
import axios from "axios";
import "./TradeJournaling.css"; // Reuse shared styles

function TradesHistoryActivityAnalysis() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState("");

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("File uploaded successfully:", response.data);
        alert("File uploaded successfully!");
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        alert("Error uploading file.");
      });
  };

  const getAnalysis = () => {
    axios
      .get("http://localhost:3000/TradingAnalysis", { withCredentials: true })
      .then((response) => {
        console.log("Analysis:", response.data);
        setAnalysisResult(response.data);
      })
      .catch((error) => {
        console.error("Error fetching analysis:", error);
        alert("Error fetching analysis.");
      });
  };

  return (
    <div className="upload-container">
      <h2>Upload Trades History Activity</h2>

      <div className="upload-section">
        <input
          type="file"
          onChange={handleFileChange}
          className="upload-input"
        />
        <p>
          Please upload your trades history activity file in CSV format. The
          file should contain the following columns: Date, Symbol, Action,
          Quantity, Price, and Notes.
        </p>
        <p> *** Coming Soon ***</p>
        <button onClick={handleFileUpload} className="upload-button">
          Upload
        </button>
      </div>

      <div className="upload-output">
        <h2>Get detailed analysis of your trading habits and patterns</h2>
        <button className="upload-button" onClick={getAnalysis}>
          Click Me for Analysis
        </button>

        {analysisResult && (
          <>
            <h3>Results</h3>
            <p>{analysisResult.message}</p>
            {/* <pre>{JSON.stringify(analysisResult, null, 2)}</pre> */}
          </>
        )}
      </div>
    </div>
  );
}

export default TradesHistoryActivityAnalysis;
