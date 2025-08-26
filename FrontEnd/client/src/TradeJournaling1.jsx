// import React, { useState } from "react";
// import Button from "./Button";
// import axios from "axios";
// function TradeJournaling() {
//   const [Ticker, setTicker] = useState("");
//   const [InitialCapital, setInitialCapital] = useState("");
//   const [ProfitLoss, setProfitLoss] = useState("");
//   //   const [ProfitPercentage, setProfitPercentage] = useState("");
//   const [PreMarketSentiment, setPreMarketSentiment] = useState("");
//   const [TradeDetail, setTradeDetail] = useState("");
//   const [MarketSentimentinBinary, setPreMarketSentimentinBinary] = useState("");
//   const [newsdayinBinary, setNewsdayinBinary] = useState("");
//   const [SleepQuality, setSleepQuality] = useState("");
//   const [ChoppyDay, setChoppyDay] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // if (
//     //   !Ticker ||
//     //   !InitialCapital ||
//     //   !ProfitLoss ||
//     //   !PreMarketSentiment ||
//     //   !TradeDetail ||
//     //   !MarketSentimentinBinary ||
//     //   !newsdayinBinary ||
//     //   !SleepQuality ||
//     //   !ChoppyDay ||
//     //   !Number.isInteger(InitialCapital) ||
//     //   !Number.isInteger(ProfitLoss) ||
//     //   !Number.isInteger(MarketSentimentinBinary) ||
//     //   !Number.isInteger(newsdayinBinary)
//     // ) {
//     //   alert("Please fill in all fields.");
//     //   return;
//     // }
//     console.log("Submitting Trade Journaling with data:");

//     //     axios
//     //       .post("http://localhost:3000/TradeJournaling", {
//     //         Ticker,
//     //         InitialCapital,
//     //         ProfitLoss,
//     //         PreMarketSentiment,
//     //         TradeDetail,
//     //         MarketSentimentinBinary,
//     //         newsdayinBinary,
//     //         SleepQuality,
//     //         ChoppyDay,
//     //       })
//     //       .then(function (response) {
//     //         if (response.status === 200) {
//     //           alert("Trade Journaling submitted successfully!");
//     //         }
//     //       })
//     //       .then(function (error) {
//     //         console.error("Error submitting Trade Journaling:", error);
//     //         alert("Failed to submit Trade Journaling. Please try again.");
//     //       });
//     //   };
//     axios
//       .post("http://localhost:3000/TradeJournaling", {
//         Ticker: Ticker,
//         InitialCapital: InitialCapital,
//         ProfitLoss: ProfitLoss,
//         PreMarketSentiment: PreMarketSentiment,
//         TradeDetail: TradeDetail,
//         MarketSentimentinBinary: MarketSentimentinBinary,
//         newsdayinBinary: newsdayinBinary,
//         SleepQuality: SleepQuality,
//         ChoppyDay: ChoppyDay,
//       })
//       .then(function (response) {
//         if (response.status === 200) {
//           alert("Trade Journaling submitted successfully!");
//         }
//       })
//       .catch(function (error) {
//         // <-- use catch here
//         console.error("Error submitting Trade Journaling:", error);
//         alert("Failed to submit Trade Journaling. Please try again.");
//       });
//   };

//   return (
//     <div>
//       <h1>Trade Journaling </h1>
//       <h2>log your trade below</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <input
//             type="text"
//             placeholder="Ticker"
//             value={Ticker}
//             onChange={(e) => setTicker(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Initial Capital"
//             value={InitialCapital}
//             onChange={(e) => setInitialCapital(e.target.value)}
//           />

//           <input
//             type="text"
//             placeholder="Profit/Loss"
//             value={ProfitLoss}
//             onChange={(e) => setProfitLoss(e.target.value)}
//           />
//           <input type="text" placeholder="Profit %" />
//           <input
//             type="text"
//             placeholder="Pre market Sentiment "
//             value={PreMarketSentiment}
//             onChange={(e) => setPreMarketSentiment(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Trade Details "
//             value={TradeDetail}
//             onChange={(e) => setTradeDetail(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Market sentiment 1/0/-1"
//             value={MarketSentimentinBinary}
//             onChange={(e) => setPreMarketSentimentinBinary(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="News Day"
//             value={newsdayinBinary}
//             onChange={(e) => setNewsdayinBinary(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Sleep Qualitys"
//             value={SleepQuality}
//             onChange={(e) => setSleepQuality(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Choppy/Day"
//             value={ChoppyDay}
//             onChange={(e) => setChoppyDay(e.target.value)}
//           />
//         </div>
//         <Button text="Submit" className="submit_button" type="submit" />
//       </form>
//     </div>
//   );
// }
// export default TradeJournaling;

// import React, { useState } from "react";
// import {
//   TrendingUp,
//   DollarSign,
//   Activity,
//   Calendar,
//   Moon,
//   BarChart3,
//   Brain,
//   Newspaper,
//   AlertTriangle,
// } from "lucide-react";
// import axios from "axios";
// import "./TradeJournaling.css";
// // Assuming you

// // Custom Button component (since we don't have access to your Button component)
// const Button = ({ text, className, type, onClick }) => (
//   <button
//     type={type}
//     onClick={onClick}
//     className={`px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/50 ${className}`}
//   >
//     {text}
//   </button>
// );

// function TradeJournaling() {
//   const [Ticker, setTicker] = useState("");
//   const [InitialCapital, setInitialCapital] = useState("");
//   const [ProfitLoss, setProfitLoss] = useState("");
//   const [PreMarketSentiment, setPreMarketSentiment] = useState("");
//   const [TradeDetail, setTradeDetail] = useState("");
//   const [MarketSentimentinBinary, setPreMarketSentimentinBinary] = useState("");
//   const [newsdayinBinary, setNewsdayinBinary] = useState("");
//   const [SleepQuality, setSleepQuality] = useState("");
//   const [ChoppyDay, setChoppyDay] = useState("");

//   // Calculate profit percentage
//   const getProfitPercentage = () => {
//     if (InitialCapital && ProfitLoss) {
//       const percent = (
//         (parseFloat(ProfitLoss) / parseFloat(InitialCapital)) *
//         100
//       ).toFixed(2);
//       return `${percent}%`;
//     }
//     return "";
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitting Trade Journaling with data:");

//     // Your existing axios call (commented out for demo)
//     /*
//     axios
//       .post("http://localhost:3000/TradeJournaling", {
//         Ticker: Ticker,
//         InitialCapital: InitialCapital,
//         ProfitLoss: ProfitLoss,
//         PreMarketSentiment: PreMarketSentiment,
//         TradeDetail: TradeDetail,
//         MarketSentimentinBinary: MarketSentimentinBinary,
//         newsdayinBinary: newsdayinBinary,
//         SleepQuality: SleepQuality,
//         ChoppyDay: ChoppyDay,
//       })
//       .then(function (response) {
//         if (response.status === 200) {
//           alert("Trade Journaling submitted successfully!");
//         }
//       })
//       .catch(function (error) {
//         console.error("Error submitting Trade Journaling:", error);
//         alert("Failed to submit Trade Journaling. Please try again.");
//       });
//     */

//     // Demo alert
//     alert("Trade logged successfully! (Demo mode)");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-4">
//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
//               <TrendingUp className="w-8 h-8 text-white" />
//             </div>
//             <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Trade Journaling
//             </h1>
//           </div>
//           <p className="text-slate-300 text-xl">
//             Log your trade below and track your performance
//           </p>
//         </div>

//         {/* Form Container */}
//         <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
//           <div onSubmit={handleSubmit}>
//             {/* Trade Basics */}
//             <div className="mb-8">
//               <h3 className="text-2xl font-semibold text-white flex items-center gap-3 mb-6">
//                 <DollarSign className="w-6 h-6 text-green-400" />
//                 Trade Basics
//               </h3>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-slate-300">
//                     Ticker Symbol
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="e.g., AAPL, TSLA"
//                     value={Ticker}
//                     onChange={(e) => setTicker(e.target.value)}
//                     className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white/10"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-slate-300">
//                     Initial Capital
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="$1000"
//                     value={InitialCapital}
//                     onChange={(e) => setInitialCapital(e.target.value)}
//                     className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white/10"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-slate-300">
//                     Profit/Loss
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="+150 or -75"
//                     value={ProfitLoss}
//                     onChange={(e) => setProfitLoss(e.target.value)}
//                     className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white/10"
//                   />
//                 </div>
//               </div>

//               {/* Auto-calculated Profit % */}
//               {getProfitPercentage() && (
//                 <div className="mt-4 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30">
//                   <div className="flex items-center gap-2">
//                     <BarChart3 className="w-5 h-5 text-green-400" />
//                     <span className="text-white font-medium">
//                       Profit Percentage:{" "}
//                     </span>
//                     <span
//                       className={`font-bold text-lg ${
//                         parseFloat(ProfitLoss) >= 0
//                           ? "text-green-400"
//                           : "text-red-400"
//                       }`}
//                     >
//                       {getProfitPercentage()}
//                     </span>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Market Analysis */}
//             <div className="mb-8">
//               <h3 className="text-2xl font-semibold text-white flex items-center gap-3 mb-6">
//                 <Activity className="w-6 h-6 text-blue-400" />
//                 Market Analysis
//               </h3>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-slate-300">
//                     Pre-market Sentiment
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Bullish, Bearish, Neutral"
//                     value={PreMarketSentiment}
//                     onChange={(e) => setPreMarketSentiment(e.target.value)}
//                     className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white/10"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-slate-300 flex items-center gap-2">
//                     <BarChart3 className="w-4 h-4" />
//                     Market Sentiment (1/0/-1)
//                   </label>
//                   <select
//                     value={MarketSentimentinBinary}
//                     onChange={(e) =>
//                       setPreMarketSentimentinBinary(e.target.value)
//                     }
//                     className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white/10"
//                   >
//                     <option value="" className="bg-slate-800">
//                       Select sentiment
//                     </option>
//                     <option value="1" className="bg-slate-800">
//                       Bullish (1)
//                     </option>
//                     <option value="0" className="bg-slate-800">
//                       Neutral (0)
//                     </option>
//                     <option value="-1" className="bg-slate-800">
//                       Bearish (-1)
//                     </option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Trade Details */}
//             <div className="mb-8">
//               <h3 className="text-2xl font-semibold text-white flex items-center gap-3 mb-6">
//                 <Brain className="w-6 h-6 text-purple-400" />
//                 Trade Details & Strategy
//               </h3>

//               <div className="space-y-2">
//                 <label className="block text-sm font-medium text-slate-300">
//                   Trade Details
//                 </label>
//                 <textarea
//                   placeholder="Describe your trade strategy, entry/exit points, reasoning..."
//                   value={TradeDetail}
//                   onChange={(e) => setTradeDetail(e.target.value)}
//                   rows={4}
//                   className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white/10 resize-none"
//                 />
//               </div>
//             </div>

//             {/* External Factors */}
//             <div className="mb-8">
//               <h3 className="text-2xl font-semibold text-white flex items-center gap-3 mb-6">
//                 <Calendar className="w-6 h-6 text-yellow-400" />
//                 External Factors
//               </h3>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-slate-300 flex items-center gap-2">
//                     <Newspaper className="w-4 h-4" />
//                     News Day
//                   </label>
//                   <select
//                     value={newsdayinBinary}
//                     onChange={(e) => setNewsdayinBinary(e.target.value)}
//                     className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white/10"
//                   >
//                     <option value="" className="bg-slate-800">
//                       Select
//                     </option>
//                     <option value="1" className="bg-slate-800">
//                       Yes
//                     </option>
//                     <option value="0" className="bg-slate-800">
//                       No
//                     </option>
//                   </select>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-slate-300 flex items-center gap-2">
//                     <Moon className="w-4 h-4" />
//                     Sleep Quality
//                   </label>
//                   <select
//                     value={SleepQuality}
//                     onChange={(e) => setSleepQuality(e.target.value)}
//                     className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white/10"
//                   >
//                     <option value="" className="bg-slate-800">
//                       Rate quality
//                     </option>
//                     <option value="5" className="bg-slate-800">
//                       Excellent (5)
//                     </option>
//                     <option value="4" className="bg-slate-800">
//                       Good (4)
//                     </option>
//                     <option value="3" className="bg-slate-800">
//                       Average (3)
//                     </option>
//                     <option value="2" className="bg-slate-800">
//                       Poor (2)
//                     </option>
//                     <option value="1" className="bg-slate-800">
//                       Terrible (1)
//                     </option>
//                   </select>
//                 </div>

//                 <div className="space-y-2">
//                   <label className="block text-sm font-medium text-slate-300 flex items-center gap-2">
//                     <AlertTriangle className="w-4 h-4" />
//                     Choppy Day
//                   </label>
//                   <select
//                     value={ChoppyDay}
//                     onChange={(e) => setChoppyDay(e.target.value)}
//                     className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:bg-white/10"
//                   >
//                     <option value="" className="bg-slate-800">
//                       Select
//                     </option>
//                     <option value="1" className="bg-slate-800">
//                       Very Choppy
//                     </option>
//                     <option value="0" className="bg-slate-800">
//                       Normal/Trending
//                     </option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <div className="text-center pt-6">
//               <Button
//                 text="Log Trade"
//                 className="submit_button text-lg px-12 py-4"
//                 type="submit"
//                 onClick={handleSubmit}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-8 text-slate-400">
//           <p>
//             Track your trades • Analyze your performance • Improve your strategy
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TradeJournaling;

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

// Custom Button component
const Button = ({ text, className, type, onClick }) => (
  <button
    type={type}
    onClick={onClick}
    className={`submit_button ${className}`}
  >
    {text}
  </button>
);

function TradeJournaling() {
  const [Ticker, setTicker] = useState("");
  const [InitialCapital, setInitialCapital] = useState("");
  const [ProfitLoss, setProfitLoss] = useState("");
  const [PreMarketSentiment, setPreMarketSentiment] = useState("");
  const [TradeDetail, setTradeDetail] = useState("");
  const [MarketSentimentinBinary, setPreMarketSentimentinBinary] = useState("");
  const [newsdayinBinary, setNewsdayinBinary] = useState("");
  const [SleepQuality, setSleepQuality] = useState("");
  const [ChoppyDay, setChoppyDay] = useState("");

  // Calculate profit percentage
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
    console.log("Submitting Trade Journaling with data:");
    alert("Trade logged successfully! (Demo mode)");
  };

  // Inline CSS styles to match the design
  // const styles = {
  //   container: {
  //     minHeight: "100vh",
  //     background:
  //       "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
  //     padding: "32px 24px",
  //   },
  //   maxWidth: {
  //     maxWidth: "1200px",
  //     margin: "0 auto",
  //   },
  //   header: {
  //     textAlign: "center",
  //     marginBottom: "48px",
  //   },
  //   headerIcon: {
  //     padding: "16px",
  //     background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
  //     borderRadius: "50%",
  //     display: "inline-flex",
  //     marginBottom: "24px",
  //     boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
  //   },
  //   title: {
  //     fontSize: "3.5rem",
  //     fontWeight: "800",
  //     background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
  //     WebkitBackgroundClip: "text",
  //     backgroundClip: "text",
  //     WebkitTextFillColor: "transparent",
  //     marginBottom: "16px",
  //     letterSpacing: "-0.05em",
  //   },
  //   subtitle: {
  //     color: "#94a3b8",
  //     fontSize: "1.25rem",
  //     fontWeight: "400",
  //     letterSpacing: "0.025em",
  //   },
  //   card: {
  //     background: "rgba(30, 41, 59, 0.8)",
  //     backdropFilter: "blur(20px)",
  //     border: "1px solid rgba(71, 85, 105, 0.3)",
  //     borderRadius: "24px",
  //     padding: "32px",
  //     boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)",
  //   },
  //   sectionHeader: {
  //     fontSize: "1.75rem",
  //     fontWeight: "700",
  //     color: "#f1f5f9",
  //     display: "flex",
  //     alignItems: "center",
  //     gap: "16px",
  //     marginBottom: "32px",
  //     paddingBottom: "16px",
  //     borderBottom: "1px solid rgba(71, 85, 105, 0.3)",
  //     letterSpacing: "-0.025em",
  //   },
  //   grid3: {
  //     display: "grid",
  //     gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  //     gap: "24px",
  //   },
  //   grid2: {
  //     display: "grid",
  //     gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  //     gap: "24px",
  //   },
  //   inputWrapper: {
  //     marginBottom: "24px",
  //   },
  //   label: {
  //     display: "block",
  //     fontSize: "0.95rem",
  //     fontWeight: "600",
  //     color: "#cbd5e1",
  //     marginBottom: "12px",
  //     letterSpacing: "0.025em",
  //   },
  //   labelWithIcon: {
  //     display: "flex",
  //     alignItems: "center",
  //     gap: "10px",
  //   },
  //   input: {
  //     background: "rgba(30, 41, 59, 0.6)",
  //     border: "1px solid rgba(71, 85, 105, 0.4)",
  //     borderRadius: "16px",
  //     padding: "16px 20px",
  //     color: "#e2e8f0",
  //     fontSize: "16px",
  //     fontWeight: "400",
  //     width: "100%",
  //     outline: "none",
  //     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  //   },
  //   select: {
  //     background: "rgba(30, 41, 59, 0.6)",
  //     border: "1px solid rgba(71, 85, 105, 0.4)",
  //     borderRadius: "16px",
  //     padding: "16px 20px",
  //     color: "#e2e8f0",
  //     fontSize: "16px",
  //     fontWeight: "400",
  //     width: "100%",
  //     outline: "none",
  //     cursor: "pointer",
  //     appearance: "none",
  //     paddingRight: "48px",
  //     backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23e2e8f0' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
  //     backgroundPosition: "right 16px center",
  //     backgroundRepeat: "no-repeat",
  //     backgroundSize: "20px",
  //     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  //   },
  //   textarea: {
  //     background: "rgba(30, 41, 59, 0.6)",
  //     border: "1px solid rgba(71, 85, 105, 0.4)",
  //     borderRadius: "16px",
  //     padding: "16px 20px",
  //     color: "#e2e8f0",
  //     fontSize: "16px",
  //     fontWeight: "400",
  //     width: "100%",
  //     outline: "none",
  //     resize: "vertical",
  //     minHeight: "120px",
  //     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  //   },
  //   profitIndicator: {
  //     background:
  //       "linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)",
  //     border: "1px solid rgba(34, 197, 94, 0.3)",
  //     borderRadius: "16px",
  //     padding: "20px",
  //     marginTop: "24px",
  //     display: "flex",
  //     alignItems: "center",
  //     gap: "8px",
  //   },
  //   section: {
  //     marginBottom: "48px",
  //   },
  //   submitButton: {
  //     background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
  //     border: "none",
  //     borderRadius: "12px",
  //     padding: "16px 48px",
  //     color: "white",
  //     fontSize: "1.125rem",
  //     fontWeight: "600",
  //     cursor: "pointer",
  //     transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  //     boxShadow: "0 10px 25px rgba(59, 130, 246, 0.25)",
  //     letterSpacing: "0.025em",
  //   },
  //   footer: {
  //     textAlign: "center",
  //     marginTop: "48px",
  //     color: "#64748b",
  //     fontSize: "0.95rem",
  //     fontWeight: "400",
  //   },

  // };

  return (
    <div style={styles.container}>
      <div style={styles.maxWidth}>
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.headerIcon}>
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h1 style={styles.title}>Trade Journaling</h1>
          <p style={styles.subtitle}>
            Log your trade below and track your performance
          </p>
        </div>

        {/* Form Container */}
        <div style={styles.card}>
          <div onSubmit={handleSubmit}>
            {/* Trade Basics */}
            <div style={styles.section}>
              <h3 style={styles.sectionHeader}>
                <DollarSign className="w-7 h-7 text-green-400" />
                Trade Basics
              </h3>

              <div style={styles.grid3}>
                <div style={styles.inputWrapper}>
                  <label style={styles.label}>Ticker Symbol</label>
                  <input
                    type="text"
                    placeholder="e.g., AAPL, TSLA"
                    value={Ticker}
                    onChange={(e) => setTicker(e.target.value)}
                    style={styles.input}
                  />
                </div>

                <div style={styles.inputWrapper}>
                  <label style={styles.label}>Initial Capital</label>
                  <input
                    type="text"
                    placeholder="$1000"
                    value={InitialCapital}
                    onChange={(e) => setInitialCapital(e.target.value)}
                    style={styles.input}
                  />
                </div>

                <div style={styles.inputWrapper}>
                  <label style={styles.label}>Profit/Loss</label>
                  <input
                    type="text"
                    placeholder="+150 or -75"
                    value={ProfitLoss}
                    onChange={(e) => setProfitLoss(e.target.value)}
                    style={styles.input}
                  />
                </div>
              </div>

              {/* Auto-calculated Profit % */}
              {getProfitPercentage() && (
                <div style={styles.profitIndicator}>
                  <BarChart3 className="w-5 h-5 text-green-400" />
                  <span style={{ color: "white", fontWeight: "500" }}>
                    Profit Percentage:{" "}
                  </span>
                  <span
                    style={{
                      fontWeight: "700",
                      fontSize: "1.125rem",
                      color:
                        parseFloat(ProfitLoss) >= 0 ? "#10b981" : "#ef4444",
                    }}
                  >
                    {getProfitPercentage()}
                  </span>
                </div>
              )}
            </div>

            {/* Market Analysis */}
            <div style={styles.section}>
              <h3 style={styles.sectionHeader}>
                <Activity className="w-7 h-7 text-blue-400" />
                Market Analysis
              </h3>

              <div style={styles.grid2}>
                <div style={styles.inputWrapper}>
                  <label style={styles.label}>Pre-market Sentiment</label>
                  <input
                    type="text"
                    placeholder="Bullish, Bearish, Neutral"
                    value={PreMarketSentiment}
                    onChange={(e) => setPreMarketSentiment(e.target.value)}
                    style={styles.input}
                  />
                </div>

                <div style={styles.inputWrapper}>
                  <label style={{ ...styles.label, ...styles.labelWithIcon }}>
                    <BarChart3 className="w-4 h-4" />
                    Market Sentiment (1/0/-1)
                  </label>
                  <select
                    value={MarketSentimentinBinary}
                    onChange={(e) =>
                      setPreMarketSentimentinBinary(e.target.value)
                    }
                    style={styles.select}
                  >
                    <option value="">Select sentiment</option>
                    <option value="1">Bullish (1)</option>
                    <option value="0">Neutral (0)</option>
                    <option value="-1">Bearish (-1)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Trade Details */}
            <div style={styles.section}>
              <h3 style={styles.sectionHeader}>
                <Brain className="w-7 h-7 text-purple-400" />
                Trade Details & Strategy
              </h3>

              <div style={styles.inputWrapper}>
                <label style={styles.label}>Trade Details</label>
                <textarea
                  placeholder="Describe your trade strategy, entry/exit points, reasoning..."
                  value={TradeDetail}
                  onChange={(e) => setTradeDetail(e.target.value)}
                  style={styles.textarea}
                />
              </div>
            </div>

            {/* External Factors */}
            <div style={styles.section}>
              <h3 style={styles.sectionHeader}>
                <Calendar className="w-7 h-7 text-yellow-400" />
                External Factors
              </h3>

              <div style={styles.grid3}>
                <div style={styles.inputWrapper}>
                  <label style={{ ...styles.label, ...styles.labelWithIcon }}>
                    <Newspaper className="w-4 h-4" />
                    News Day
                  </label>
                  <select
                    value={newsdayinBinary}
                    onChange={(e) => setNewsdayinBinary(e.target.value)}
                    style={styles.select}
                  >
                    <option value="">Select</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>

                <div style={styles.inputWrapper}>
                  <label style={{ ...styles.label, ...styles.labelWithIcon }}>
                    <Moon className="w-4 h-4" />
                    Sleep Quality
                  </label>
                  <select
                    value={SleepQuality}
                    onChange={(e) => setSleepQuality(e.target.value)}
                    style={styles.select}
                  >
                    <option value="">Rate quality</option>
                    <option value="5">Excellent (5)</option>
                    <option value="4">Good (4)</option>
                    <option value="3">Average (3)</option>
                    <option value="2">Poor (2)</option>
                    <option value="1">Terrible (1)</option>
                  </select>
                </div>

                <div style={styles.inputWrapper}>
                  <label style={{ ...styles.label, ...styles.labelWithIcon }}>
                    <AlertTriangle className="w-4 h-4" />
                    Choppy Day
                  </label>
                  <select
                    value={ChoppyDay}
                    onChange={(e) => setChoppyDay(e.target.value)}
                    style={styles.select}
                  >
                    <option value="">Select</option>
                    <option value="1">Very Choppy</option>
                    <option value="0">Normal/Trending</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div style={{ textAlign: "center", paddingTop: "32px" }}>
              <button
                style={styles.submitButton}
                type="submit"
                onClick={handleSubmit}
                onMouseOver={(e) => {
                  e.target.style.background =
                    "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow =
                    "0 15px 35px rgba(59, 130, 246, 0.35)";
                }}
                onMouseOut={(e) => {
                  e.target.style.background =
                    "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow =
                    "0 10px 25px rgba(59, 130, 246, 0.25)";
                }}
              >
                Log Trade
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p>
            Track your trades • Analyze your performance • Improve your strategy
          </p>
        </div>
      </div>
    </div>
  );
}

export default TradeJournaling;
