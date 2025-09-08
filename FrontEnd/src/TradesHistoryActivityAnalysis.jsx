import React, { useState } from "react";
import axios from "axios";
import "./styles/TradesHistoryActivityAnalysis.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
        headers: { "Content-Type": "multipart/form-data" },
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
      .get(`${API_BASE_URL}/appController/TradingAnalysis`, {
        withCredentials: true,
      })
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
    <div className="analysis-wrapper">
      <div className="analysis-card">
        <h1 className="analysis-title">Trades History Analysis</h1>
        <p className="analysis-subtitle">
          Upload your trade history file to uncover patterns, performance
          trends, and psychological insights.
        </p>

        <div className="upload-section">
          <input
            type="file"
            onChange={handleFileChange}
            className="upload-input"
          />
          <p className="analysis-hint">
            Please upload your trades history in <b>CSV format</b> with columns:{" "}
            <i>Date, Symbol, Action, Quantity, Price, Notes</i>.
          </p>
          <p className="coming-soon">*** Coming Soon ***</p>
          <button onClick={handleFileUpload} className="analysis-button">
            Upload
          </button>
        </div>

        <div className="upload-output">
          <h2 className="output-title">
            Get detailed analysis of your trading habits and patterns
          </h2>
          <button className="analysis-button" onClick={getAnalysis}>
            Run Analysis
          </button>

          {analysisResult && (
            <div className="analysis-result">
              <h3>Results</h3>
              <p>{analysisResult.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TradesHistoryActivityAnalysis;
