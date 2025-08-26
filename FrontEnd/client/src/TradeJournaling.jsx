import React, { useState } from "react";
import {
  TrendingUp,
  DollarSign,
  Activity,
  Calendar,
  Moon,
  BarChart3,
  Brain,
  Newspaper,
  AlertTriangle,
} from "lucide-react";
import "./TradeJournaling.css";
import axios from "axios";

function TradeJournaling() {
  const [Ticker, setTicker] = useState("");
  const [InitialCapital, setInitialCapital] = useState("");
  const [ProfitLoss, setProfitLoss] = useState("");
  const [PreMarketSentiment, setPreMarketSentiment] = useState("");
  const [TradeDetail, setTradeDetail] = useState("");
  const [MarketSentimentinBinary, setMarketSentimentinBinary] = useState("");
  const [newsdayinBinary, setNewsdayinBinary] = useState("");
  const [SleepQuality, setSleepQuality] = useState("");
  const [ChoppyDay, setChoppyDay] = useState("");

  const getProfitPercentage = () => {
    if (InitialCapital && ProfitLoss) {
      const percent = (
        (parseFloat(ProfitLoss) / parseFloat(InitialCapital)) *
        100
      ).toFixed(2);
      return `${percent}%`;
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Trade logged successfully!");
    // if (
    //   !Ticker ||
    //   !InitialCapital ||
    //   !ProfitLoss ||
    //   !PreMarketSentiment ||
    //   !TradeDetail ||
    //   !MarketSentimentinBinary ||
    //   !newsdayinBinary ||
    //   !SleepQuality ||
    //   !ChoppyDay ||
    //   !Number.isInteger(InitialCapital) ||
    //   !Number.isInteger(ProfitLoss) ||
    //   !Number.isInteger(MarketSentimentinBinary) ||
    //   !Number.isInteger(newsdayinBinary)
    // ) {
    //   alert("Please fill in all fields.");
    //   return;
    // }
    console.log("Submitting Trade Journaling with data:");
    axios
      .post(
        "http://localhost:3000/TradeJournaling",
        {
          Ticker: Ticker,
          InitialCapital: InitialCapital,
          ProfitLoss: ProfitLoss,
          PreMarketSentiment: PreMarketSentiment,
          TradeDetail: TradeDetail,
          MarketSentimentinBinary: MarketSentimentinBinary,
          newsdayinBinary: newsdayinBinary,
          SleepQuality: SleepQuality,
          ChoppyDay: ChoppyDay,
        },
        { withCredentials: true }
      )
      .then(function (response) {
        if (response.status === 200) {
          alert("Trade Journaling submitted successfully!");
        }
      })
      .catch(function (error) {
        // <-- use catch here
        console.error("Error submitting Trade Journaling:", error);
        alert("Failed to submit Trade Journaling. Please try again.");
      });
  };

  return (
    <div className="trade-container">
      <div className="trade-wrapper">
        {/* Header */}
        <div className="trade-header">
          <div className="trade-header-icon">
            <TrendingUp />
          </div>
          <h1 className="trade-title">Trade Journaling</h1>
          <p className="trade-subtitle">
            Log your trade below and track your performance
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Trade Basics */}
          <div className="trade-section">
            <h3 className="trade-section-header">
              <DollarSign /> Trade Basics
            </h3>
            <div className="grid-3">
              <div className="input-wrapper">
                <label>Ticker Symbol</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="e.g., AAPL"
                  value={Ticker}
                  onChange={(e) => setTicker(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label>Initial Capital</label>
                <input
                  type="number"
                  className="input-field"
                  placeholder="$1000"
                  value={InitialCapital}
                  onChange={(e) => setInitialCapital(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label>Profit/Loss</label>
                <input
                  type="number"
                  className="input-field"
                  placeholder="+150 or -75"
                  value={ProfitLoss}
                  onChange={(e) => setProfitLoss(e.target.value)}
                />
              </div>
            </div>

            {/* {getProfitPercentage() && (
              <div className="profit-indicator">
                <BarChart3 />
                <strong>Profit %:</strong> {getProfitPercentage()}
              </div>
            )} */}
            {getProfitPercentage() && (
              <div
                className={`profit-indicator ${
                  parseFloat(ProfitLoss) < 0 ? "loss" : "gain"
                }`}
              >
                <BarChart3 />
                <strong>Profit %:</strong> {getProfitPercentage()}
              </div>
            )}
          </div>

          {/* Market Analysis */}
          <div className="trade-section">
            <h3 className="trade-section-header">
              <Activity /> Market Analysis
            </h3>
            <div className="grid-2">
              <div className="input-wrapper">
                <label>Pre-market Sentiment</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Bullish, Bearish, Neutral"
                  value={PreMarketSentiment}
                  onChange={(e) => setPreMarketSentiment(e.target.value)}
                />
              </div>
              <div className="input-wrapper">
                <label>Market Sentiment (1/0/-1)</label>
                <select
                  className="select-field"
                  value={MarketSentimentinBinary}
                  onChange={(e) => setMarketSentimentinBinary(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="1">Bullish (1)</option>
                  <option value="0">Neutral (0)</option>
                  <option value="-1">Bearish (-1)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Trade Details */}
          <div className="trade-section">
            <h3 className="trade-section-header">
              <Brain /> Trade Details & Strategy
            </h3>
            <div className="input-wrapper">
              <label>Trade Details</label>
              <textarea
                className="textarea-field"
                placeholder="Describe your strategy, entry/exit points..."
                value={TradeDetail}
                onChange={(e) => setTradeDetail(e.target.value)}
              ></textarea>
            </div>
          </div>

          {/* External Factors */}
          <div className="trade-section">
            <h3 className="trade-section-header">
              <Calendar /> External Factors
            </h3>
            <div className="grid-3">
              <div className="input-wrapper">
                <label>
                  <Newspaper size={16} /> News Day
                </label>
                <select
                  className="select-field"
                  value={newsdayinBinary}
                  onChange={(e) => setNewsdayinBinary(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
              <div className="input-wrapper">
                <label>
                  <Moon size={16} /> Sleep Quality
                </label>
                <select
                  className="select-field"
                  value={SleepQuality}
                  onChange={(e) => setSleepQuality(e.target.value)}
                >
                  <option value="">Rate</option>
                  <option value="5">Excellent (5)</option>
                  <option value="4">Good (4)</option>
                  <option value="3">Average (3)</option>
                  <option value="2">Poor (2)</option>
                  <option value="1">Terrible (1)</option>
                </select>
              </div>
              <div className="input-wrapper">
                <label>
                  <AlertTriangle size={16} /> Choppy Day
                </label>
                <select
                  className="select-field"
                  value={ChoppyDay}
                  onChange={(e) => setChoppyDay(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="1">Very Choppy</option>
                  <option value="0">Normal/Trending</option>
                </select>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <button className="submit-button" type="submit">
              Log Trade
            </button>
          </div>
        </form>

        <div className="trade-footer">
          Track your trades • Analyze your performance • Improve your strategy
        </div>
      </div>
    </div>
  );
}

export default TradeJournaling;
