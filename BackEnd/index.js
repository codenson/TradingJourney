import 'dotenv/config';
import fs from 'fs';
import csv from 'csv-parser';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import cron from 'node-cron';
import axios from 'axios';
import session from 'express-session';
import attachEmail from './middleWares/emailMiddleware.js';
import authRoutes from './routes/auth.js';
import serverTestRoute from './routes/serverState.js';
import logicController from './controllers/appController.js';
import { printDatabaserecords, testConnection } from './services/AWS-RDS.js';
import { main } from './services/GOOLAI_GEMINI.js';




const app = express();
const port = 3000;

app.use(cors({
    origin: process.env.FRONTEND_URL,  // 
    credentials: true                // ✅ Allow cookies to be sent
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
    session({
        secret: process.env.SESSION_SECRET,        //

        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false, // true if using HTTPS
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        }
    })
);

/**
 * Use auth routes for handling authentication-related endpoints.
 */
app.use('/auth', authRoutes);
/**
 * Use server state routes for handling server status and session verification endpoints.
 */
app.use('/serverState', attachEmail, serverTestRoute);

/**
//  * Use appController routes for handling application-specific endpoints.
//  */
app.use('/appController', attachEmail, logicController);



/** 
 *  Database table name from environment variable.
 */
const table = process.env.DB_TABLE;

//for testing purpose
//printDatabaserecords();

//for testing purpose
//testConnection();


/**
 * Scheduled task to fetch pre-market analysis charbots such as GOOGL Gemini NPL or ChatGPT and save it to a text file every day at 9:15 AM.
 */
cron.schedule('15 9 * * *', async () => {
    //cron.schedule('* * * * *', async () => {
    // cron.schedule('* * * * *', async () => {
    try {
        const prompt = process.env.PREMARKET_PROMPT; // Get prompt from environment
        var text = await main(prompt);        // Generate AI response
        if (!text) {
            console.error('No text generated from AI model');
            text = "No Data is available now, please try again later.";

        }
        fs.writeFileSync('./Data/PreMarketAnalysis.txt', text, 'utf8'); // 

    } catch (error) {
        console.error('Error running scheduled task:', error); // Log any errors
    }
});

// var file = './Data/DayTraderBook.csv';
var csvContent = "";
/**
 * Function to pasrse the CSV file and convert it to JSON format.
 * @param {} file  the path to the CSV file
 * @returns   {Promise} a promise that resolves to the JSON content of the CSV file
 */
function parseCSV(file) {
    return new Promise((resolve) => {
        const results = [];
        fs.createReadStream(file)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', () => {
                csvContent = JSON.stringify(results);
                resolve(csvContent);
            });

    });
}
// await parseCSV('./Data/DayTraderBook.csv');
// //console.log(csvContent);


var prompt = process.env.PROMPT_TEXT + csvContent;
var text = await main(prompt);
console.log("Reply::::::::   ", text);

// function readJsonFile(filename) {
//     const content = fs.readFileSync(filename, "utf8");
//     var text = JSON.stringify(JSON.parse(content));
//     console.log("users" + text);
//     return text;

// }
// /**
//  * Function to update the interactions memory file with new summaried text.
//  * @param {} text the current analyied report of trading activities based on the analysis performed by NLP bot */
// function updateInteractionsMemory(text) {
//     const content = {
//         "user": "name",
//         "memory": text
//     }
//     fs.writeFileSync("./Agentic_Memory/user.json", JSON.stringify(content, null, 2), "utf8");
//     //fs.writeFileSync("./Agentic_Memory/user.json", content, "utf8");
//     //console.log("updated");
// }


// var filename = "./Prompts/AgenticMemoryPrompt.json";
// var prompt = readJsonFile(filename).prompt + text;
// // console.log("Prompt::::::::   ", prompt);

// text = await main(prompt);
// console.log("Final Reply::::::::   ", text);


// updateInteractionsMemory(text);



// connectDB();
// const entry = new HistoricPropt({ name: 'Niko', memText: text });
// await entry.save();

// const allEntries = await HistoricPropt.find();
// await HistoricPropt.collection.drop();



// console.log('All entries::::::::::::::::;', allEntries);

// const count = await HistoricPropt.countDocuments();
// console.log('Total documents:', count);


// disconnectDB();


app.listen(port, '0.0.0.0', () => { console.log(`Example app listening on port ${port}`) })





