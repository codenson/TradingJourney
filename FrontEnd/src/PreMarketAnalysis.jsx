import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/PreMarketAnalysis.css";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
          `${API_BASE_URL}/appController/PreMarketAnalysis`,
          { withCredentials: true }
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
