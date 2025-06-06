# AI-Powered Journaling for Day Traders

## Project Overview
This project is designed to help day traders who are struggling to achieve consistent profits by combining journaling with advanced AI analysis. By leveraging smart, engineered prompting techniques, the system assists traders in reflecting on their trading strategies and uncovering what works and what doesn’t.

The AI provides personalized suggestions, advice, and strategies aimed at improving trading performance and guiding traders toward profitability.

## Features
- **Trading Journaling**: Easily log daily trading activities and thoughts.
- **AI Analysis**: Uses advanced AI models to analyze journal entries.
- **Smart Prompting**: Engineered prompts generate actionable feedback.
- **Personalized Advice**: Tailored suggestions based on individual trading behavior.
- **Strategy Insights**: Identifies strengths and weaknesses in trading approaches.

## How It Works
1. Traders input their daily trading journals (CSV or text).
2. The AI engine processes the data with custom prompts.
3. The system returns reflective insights, highlighting key factors affecting profitability.
4. Traders receive clear advice on potential improvements.

## Tech Stack
- Node.js with Express for backend API
- AI integration with Google Gemini / OpenAI APIs
- CSV file processing for journal input
- NoSQL database (e.g., MongoDB) for storing journals and analysis results
- dotenv for environment variable management

## Getting Started

### Prerequisites
- Node.js (v14+)
- npm
- API keys for AI services (Google GenAI, OpenAI, etc.)
- MongoDB or any preferred NoSQL database

### Installation
```bash
git clone https://github.com/yourusername/ai-journaling-trader.git
cd ai-journaling-trader
npm install

GOOGLE_API_KEY=your_google_api_key_here
OPENAI_API_KEY=your_openai_api_key_here


npm start