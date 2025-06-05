import 'dotenv/config';
import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import csv from 'csv-parser';

const ai = new GoogleGenAI({ apiKey: process.env.Google_API_KEY });
var phrase = "Write a one-sentence bedtime story about a unicorn.";

async function main(phrase) {
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: phrase,
    });
    console.log(response.text);
}

const results = [];

fs.createReadStream('./Data/DayTraderBook.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        const jsonString = JSON.stringify(results);
        console.log(jsonString); // Send this via API
    });
var prompt = "Analyze the following trading journey and " +
    "give advice and suggestions for improvement and strategies to become profitable in trading: " + JSON.stringify(results);



main(prompt);