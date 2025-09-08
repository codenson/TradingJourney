
import { writeEntry, getEntries } from '../services/dynamoDB.js';
import axios from 'axios';
import fs from 'fs';



// import { AWS_RDS_db } from './MySQL_AWS_Aurora.js';
import express from 'express';

const LLM_URL = process.env.LLM_URL;

const appController = express.Router();
/***
   * Endpoint to handle trade journaling data submission.
    * It receives the trade data from the client, processes it, and saves it to DynamoDB.
//  */
appController.post('/TradeJournaling', async (req, res) => {

    const email = req.session?.email;


    // console.log("***************************Received Trade Journaling data:");
    // console.log("***************************Received Trade Journaling data Data:", req.body);
    const {
        // email: currUser,
        Ticker,
        InitialCapital,
        ProfitLoss,
        PreMarketSentiment,
        TradeDetail,
        MarketSentimentinBinary,
        newsdayinBinary,
        SleepQuality,
        ChoppyDay
    } = req.body;
    // const email = "test@gmail.com";
    // const email = req.session.email;

    const entry = {
        email,
        Ticker,
        InitialCapital,
        ProfitLoss,
        PreMarketSentiment,
        TradeDetail,
        MarketSentimentinBinary,
        newsdayinBinary,
        SleepQuality,
        ChoppyDay
    };
    console.log("entry:", entry);

    try {
        await writeEntry(email, entry);
        console.log("Entry saved successfully!");
        res.status(200).json({ message: "Entry saved successfully!" });
    } catch (err) {
        console.error("WriteEntry failed:", err); // log full error
        res.status(500).json({ error: "Failed to save entry", details: err.message });
    }
    // res.status(200).json({ message: "Entry saved successfully!" });
});

/**
 * Endpoint to get trading analysis based on user's trade journaling data. Retireives user data from DynamoDB and sends it to the Flask LLM server for analysis.
 */
appController.get('/TradingAnalysis', async (req, res) => {
    const email = req.session?.email;
    ///    console.log("*************************** Received Trading Analysis request" + req.session.email + "    =====");
    console.log("Session data:", req.session);

    const userText = await getEntries(req.session.email);

    try {
        const response = await axios.post(
            `${LLM_URL}/AnalyseCSV`,
            { data: userText },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        console.log('Response:', response.data);
        res.status(200).json({ message: response.data });

    } catch (error) {
        console.error('Error fetching data from Flask:', error.message);
        res.status(500).json({ error: "Failed to retrieve analysis." });
    }
});

/**
 * Endpoint to get the pre-market analysis data. It fetches market sentiment data from a txt file. 
 * Market sentiments data was fetched using LLMs facing the internet and was saved to this this txt file to be avialable. 
 * */
appController.get('/PreMarketAnalysis', async (req, res) => {
    const PreMarketAnalysis = await fs.readFileSync('./Data/PreMarketAnalysis.txt', 'utf8'); // Read the file
    res.status(200).json({ PreMarketAnalysis });
});





export default appController;