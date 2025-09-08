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
  Sparkles,
} from "lucide-react";
import "./styles/TradeJournaling.css";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Submitting Trade Journaling with data:");
      const response = await axios.post(
        `${API_BASE_URL}/appController/TradeJournaling`,
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
      );

      if (response.status === 200) {
        alert("Trade Journaling submitted successfully!");
        // Reset form after successful submission
        setTicker("");
        setInitialCapital("");
        setProfitLoss("");
        setPreMarketSentiment("");
        setTradeDetail("");
        setMarketSentimentinBinary("");
        setNewsdayinBinary("");
        setSleepQuality("");
        setChoppyDay("");
      }
    } catch (error) {
      console.error("Error submitting Trade Journaling:", error);
      alert("Failed to submit Trade Journaling. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modern-trade-container">
      <div className="trade-background">
        <div className="floating-particles">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
      </div>

      <div className="modern-trade-wrapper">
        {/* Modern Header */}
        <div className="modern-trade-header">
          <div className="header-glow"></div>
          <div className="trade-header-icon">
            <TrendingUp size={32} />
          </div>
          <h1 className="modern-trade-title">Trade Journaling</h1>
          <p className="modern-trade-subtitle">
            Log your trades and track your journey to success
          </p>
        </div>

        <form onSubmit={handleSubmit} className="modern-trade-form">
          {/* Trade Basics Section */}
          <div className="modern-trade-section">
            <div className="section-header">
              <DollarSign size={20} />
              <h3>Trade Basics</h3>
            </div>
            <div className="form-grid grid-3">
              <div className="modern-input-wrapper">
                <label className="modern-label">Ticker Symbol</label>
                <input
                  type="text"
                  className="modern-trade-input"
                  placeholder="e.g., AAPL"
                  value={Ticker}
                  onChange={(e) => setTicker(e.target.value.toUpperCase())}
                />
                <div className="input-glow"></div>
              </div>
              <div className="modern-input-wrapper">
                <label className="modern-label">Initial Capital</label>
                <input
                  type="number"
                  className="modern-trade-input"
                  placeholder="$1000"
                  value={InitialCapital}
                  onChange={(e) => setInitialCapital(e.target.value)}
                />
                <div className="input-glow"></div>
              </div>
              <div className="modern-input-wrapper">
                <label className="modern-label">Profit/Loss</label>
                <input
                  type="number"
                  className="modern-trade-input"
                  placeholder="+150 or -75"
                  value={ProfitLoss}
                  onChange={(e) => setProfitLoss(e.target.value)}
                />
                <div className="input-glow"></div>
              </div>
            </div>

            {getProfitPercentage() && (
              <div
                className={`modern-profit-indicator ${
                  parseFloat(ProfitLoss) < 0 ? "loss" : "gain"
                }`}
              >
                <BarChart3 size={18} />
                <span className="profit-label">Profit Percentage:</span>
                <span className="profit-value">{getProfitPercentage()}</span>
              </div>
            )}
          </div>

          {/* Market Analysis Section */}
          <div className="modern-trade-section">
            <div className="section-header">
              <Activity size={20} />
              <h3>Market Analysis</h3>
            </div>
            <div className="form-grid grid-2">
              <div className="modern-input-wrapper">
                <label className="modern-label">Pre-market Sentiment</label>
                <input
                  type="text"
                  className="modern-trade-input"
                  placeholder="Bullish, Bearish, Neutral"
                  value={PreMarketSentiment}
                  onChange={(e) => setPreMarketSentiment(e.target.value)}
                />
                <div className="input-glow"></div>
              </div>
              <div className="modern-input-wrapper">
                <label className="modern-label">Market Sentiment</label>
                <select
                  className="modern-select-field"
                  value={MarketSentimentinBinary}
                  onChange={(e) => setMarketSentimentinBinary(e.target.value)}
                >
                  <option value="">Select Sentiment</option>
                  <option value="1">🟢 Bullish (+1)</option>
                  <option value="0">⚪ Neutral (0)</option>
                  <option value="-1">🔴 Bearish (-1)</option>
                </select>
                <div className="input-glow"></div>
              </div>
            </div>
          </div>

          {/* Trade Details Section */}
          <div className="modern-trade-section">
            <div className="section-header">
              <Brain size={20} />
              <h3>Trade Strategy & Details</h3>
            </div>
            <div className="modern-input-wrapper">
              <label className="modern-label">Trade Details</label>
              <textarea
                className="modern-textarea-field"
                placeholder="Describe your strategy, entry/exit points, reasoning..."
                rows="4"
                value={TradeDetail}
                onChange={(e) => setTradeDetail(e.target.value)}
              ></textarea>
              <div className="input-glow"></div>
            </div>
          </div>

          {/* External Factors Section */}
          <div className="modern-trade-section">
            <div className="section-header">
              <Calendar size={20} />
              <h3>External Factors</h3>
            </div>
            <div className="form-grid grid-3">
              <div className="modern-input-wrapper">
                <label className="modern-label">
                  <Newspaper size={16} />
                  News Day
                </label>
                <select
                  className="modern-select-field"
                  value={newsdayinBinary}
                  onChange={(e) => setNewsdayinBinary(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="1">📰 Yes - News Day</option>
                  <option value="0">📅 No - Regular Day</option>
                </select>
                <div className="input-glow"></div>
              </div>
              <div className="modern-input-wrapper">
                <label className="modern-label">
                  <Moon size={16} />
                  Sleep Quality
                </label>
                <select
                  className="modern-select-field"
                  value={SleepQuality}
                  onChange={(e) => setSleepQuality(e.target.value)}
                >
                  <option value="">Rate Sleep</option>
                  <option value="5">😴 Excellent (5)</option>
                  <option value="4">😊 Good (4)</option>
                  <option value="3">😐 Average (3)</option>
                  <option value="2">😵 Poor (2)</option>
                  <option value="1">🥱 Terrible (1)</option>
                </select>
                <div className="input-glow"></div>
              </div>
              <div className="modern-input-wrapper">
                <label className="modern-label">
                  <AlertTriangle size={16} />
                  Market Condition
                </label>
                <select
                  className="modern-select-field"
                  value={ChoppyDay}
                  onChange={(e) => setChoppyDay(e.target.value)}
                >
                  <option value="">Select</option>
                  <option value="1">⚡ Very Choppy</option>
                  <option value="0">📈 Normal/Trending</option>
                </select>
                <div className="input-glow"></div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="submit-section">
            <button
              className={`modern-submit-button ${
                isSubmitting ? "submitting" : ""
              }`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="submit-spinner"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  Log Trade
                </>
              )}
            </button>
          </div>
        </form>

        <div className="modern-trade-footer">
          <div className="footer-content">
            <span>📊 Track your trades</span>
            <span>📈 Analyze performance</span>
            <span>🎯 Improve strategy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TradeJournaling;
