import 'dotenv/config';
import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import csv from 'csv-parser';
import bcrypt from 'bcrypt';

// import connectDB from './config/db.js';
import { connectDB, disconnectDB } from './config/db.js';
import HistoricPropt from './models/mdSchema.js';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { AWS_RDS_db } from './MySQL_AWS_Aurora.js';
import nodemailer from 'nodemailer';
import { writeEntry, getEntries } from './dynamoDB.js';
import cron from 'node-cron';






const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const table = process.env.DB_TABLE;
const currUser = "";


function setCurrUser(email) {
    currUser = email;
}


app.post('/login', async (req, res) => {

    const { email, password } = req.body;
    // currUser = email;
    try {
        const [result] = await AWS_RDS_db.query(
            'SELECT password FROM users  WHERE email = ? ',
            [email]
        );
        if (result.length > 0) {
            const storedHashedPassword = result[0].password;
            const isMatch = await bcrypt.compare(password, storedHashedPassword);
            if (isMatch) {
                res.status(200).json({ message: 'Login successful' });
                setCurrUser(email);
            }
            else if (!isMatch) {
                res.status(500).json({ error: 'Invalid email or password' });
            }



        }
    } catch (err) {
        console.error('Database error:', err);
        res.status(404).json({ error: 'Network error' });
    }



})
app.post('/signup', async (req, res) => {
    console.log('Request body:', req.body); // Debug log

    const { email, name, password } = req.body;
    if (email.length === 0 || name.length === 0 || password.length === 0) {
        console.log('Invalid input:', { email, name, password });
        return res.status(500).json({ error: 'All fields are required' });
    }
    // currUser = email;


    const userCheck = await AWS_RDS_db.query('SELECT email FROM users WHERE email = ?', [email]);
    if (userCheck[0].length > 0) {
        console.log('User already exists:', email);
        return res.status(500).json({ error: 'User already exists' });

    }
    else {

        try {
            const hashedPassword = bcrypt.hashSync(password, 10);
            const [result] = await AWS_RDS_db.query(
                'INSERT INTO users  (name, email, password) VALUES (?, ?, ?)',
                [name, email, hashedPassword]
            );

            res.status(200).json({ message: 'User added', insertId: result.insertId });
        } catch (err) {
            console.error('Database error:', err);
            res.status(500).json({ error: 'Database error' });
        }
    }



});
app.post('/forgetPassword', async (req, res) => {
    const { email } = req.body;
    console.log('Forget password request for email:', email); // Debug log

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false, // <- disables certificate validation
        },
    });



    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Password Reset Request',
        html: `
          <p>You requested a password reset.</p>
      
        `,
    };

    var response = await transporter.sendMail(mailOptions);
    if (response.accepted.length > 0) {
        console.log('Email sent successfully');
    } else {
        console.log('Email sending failed');
    }

    res.status(200).json({ message: 'Password reset email sent' });



});
// printDatabaserecords();
async function printDatabaserecords() {
    try {
        const [results] = await AWS_RDS_db.query('SELECT * FROM users');
        console.log('Query results:', results);
    } catch (err) {
        console.error('Error executing query:', err);
    }
}


// testConnection();
// testConnection();
export async function testConnection() {
    try {
        const connection = await AWS_RDS_db.getConnection();
        console.log('Database connected successfully!');
        connection.release();
        return true;
    } catch (error) {
        console.error('Database connection failed:', error);
        return false;
    }
}

// app.listen(port, () => { console.log(`Example app listening on port ${port}`) })

function createUsreCrednetials(email, password) {

    const userCredentials = {
        email: email,
        password: password,
    }


}


app.post('/TradeJournaling', async (req, res) => {

    console.log("***************************Received Trade Journaling data:");
    console.log("***************************Received Trade Journaling data Data:", req.body);
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
    const email = currUser;

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

// cron.schedule('15 9 * * *', async () => {
cron.schedule('0 * * * *', async () => {
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

/**
 * Endpoint to get the pre-market analysis data.
 */
app.get('/PreMarketAnalysis', async (req, res) => {
    const PreMarketAnalysis = await fs.readFileSync('./Data/PreMarketAnalysis.txt', 'utf8'); // Read the file
    res.status(200).json({ PreMarketAnalysis });
});

const ai = new GoogleGenAI({ apiKey: process.env.Google_API_KEY });
// var reply = "";
/**
 * Function to generate the response from the Google GenAI model.
 * @param {*} phrase  the input phrase to be processed by the AI model
 * @returns  The response text generated by the AI model to be used for further processing.
 */
async function main(phrase) {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: phrase,
        });
        reply = response.text;

        //s console.log(response.text);
        return response.text;
    } catch (error) {
        console.error("model is busy, try again later");
    }
}

// var file = './Data/DayTraderBook.csv';
// var csvContent = "";
// /**
//  * Function to pasrse the CSV file and convert it to JSON format.
//  * @param {} file  the path to the CSV file
//  * @returns   {Promise} a promise that resolves to the JSON content of the CSV file
//  */
// function parseCSV(file) {
//     return new Promise((resolve) => {
//         const results = [];
//         fs.createReadStream(file)
//             .pipe(csv())
//             .on('data', (data) => results.push(data))
//             .on('end', () => {
//                 csvContent = JSON.stringify(results);
//                 resolve(csvContent);
//             });
//     });
// }
// await parseCSV('./Data/DayTraderBook.csv');
// //console.log(csvContent);


// var prompt = process.env.PROMPT_TEXT + csvContent;
// var text = await main(prompt);
// //console.log("Reply::::::::   ", text);

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


app.listen(port, () => { console.log(`Example app listening on port ${port}`) })





