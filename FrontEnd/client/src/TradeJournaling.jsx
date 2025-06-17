import React, { useState } from "react";
import Button from "./Button";
import axios from "axios";
function TradeJournaling() {
  const [Ticker, setTicker] = useState("");
  const [InitialCapital, setInitialCapital] = useState("");
  const [ProfitLoss, setProfitLoss] = useState("");
  //   const [ProfitPercentage, setProfitPercentage] = useState("");
  const [PreMarketSentiment, setPreMarketSentiment] = useState("");
  const [TradeDetail, setTradeDetail] = useState("");
  const [MarketSentimentinBinary, setPreMarketSentimentinBinary] = useState("");
  const [newsdayinBinary, setNewsdayinBinary] = useState("");
  const [SleepQuality, setSleepQuality] = useState("");
  const [ChoppyDay, setChoppyDay] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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

    //     axios
    //       .post("http://localhost:3000/TradeJournaling", {
    //         Ticker,
    //         InitialCapital,
    //         ProfitLoss,
    //         PreMarketSentiment,
    //         TradeDetail,
    //         MarketSentimentinBinary,
    //         newsdayinBinary,
    //         SleepQuality,
    //         ChoppyDay,
    //       })
    //       .then(function (response) {
    //         if (response.status === 200) {
    //           alert("Trade Journaling submitted successfully!");
    //         }
    //       })
    //       .then(function (error) {
    //         console.error("Error submitting Trade Journaling:", error);
    //         alert("Failed to submit Trade Journaling. Please try again.");
    //       });
    //   };
    axios
      .post("http://localhost:3000/TradeJournaling", {
        Ticker: Ticker,
        InitialCapital: InitialCapital,
        ProfitLoss: ProfitLoss,
        PreMarketSentiment: PreMarketSentiment,
        TradeDetail: TradeDetail,
        MarketSentimentinBinary: MarketSentimentinBinary,
        newsdayinBinary: newsdayinBinary,
        SleepQuality: SleepQuality,
        ChoppyDay: ChoppyDay,
      })
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
    <div>
      <h1>Trade Journaling </h1>
      <h2>log your trade below</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Ticker"
            value={Ticker}
            onChange={(e) => setTicker(e.target.value)}
          />
          <input
            type="text"
            placeholder="Initial Capital"
            value={InitialCapital}
            onChange={(e) => setInitialCapital(e.target.value)}
          />

          <input
            type="text"
            placeholder="Profit/Loss"
            value={ProfitLoss}
            onChange={(e) => setProfitLoss(e.target.value)}
          />
          <input type="text" placeholder="Profit %" />
          <input
            type="text"
            placeholder="Pre market Sentiment "
            value={PreMarketSentiment}
            onChange={(e) => setPreMarketSentiment(e.target.value)}
          />
          <input
            type="text"
            placeholder="Trade Details "
            value={TradeDetail}
            onChange={(e) => setTradeDetail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Market sentiment 1/0/-1"
            value={MarketSentimentinBinary}
            onChange={(e) => setPreMarketSentimentinBinary(e.target.value)}
          />
          <input
            type="text"
            placeholder="News Day"
            value={newsdayinBinary}
            onChange={(e) => setNewsdayinBinary(e.target.value)}
          />
          <input
            type="text"
            placeholder="Sleep Qualitys"
            value={SleepQuality}
            onChange={(e) => setSleepQuality(e.target.value)}
          />
          <input
            type="text"
            placeholder="Choppy/Day"
            value={ChoppyDay}
            onChange={(e) => setChoppyDay(e.target.value)}
          />
        </div>
        <Button text="Submit" className="submit_button" type="submit" />
      </form>
    </div>
  );
}
export default TradeJournaling;
