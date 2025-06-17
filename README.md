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
- **MongoDB** for storing journals and analysis results
- **AWS RDS (MySQL)** for user authentication and relational data
- **AWS DynamoDB** for journaling entries and fast NoSQL access
- dotenv for environment variable management

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm
- API keys for AI services (Google GenAI, OpenAI, etc.)
- MongoDB, AWS RDS (MySQL), and AWS DynamoDB instances
- AWS credentials for accessing RDS and DynamoDB

### Environment Variables

Create a `.env` file in your `BackEnd` directory with the following keys:

```env
# AI API Keys
OPENAI_API_KEY=your_openai_api_key
GOOGLE_GENAI_API_KEY=your_google_genai_api_key

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# AWS Credentials
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_REGION=your_aws_region

# AWS RDS (MySQL)
RDS_HOST=your_rds_host
RDS_PORT=3306
RDS_USER=your_rds_username
RDS_PASSWORD=your_rds_password
RDS_DATABASE=your_rds_database_name

# AWS DynamoDB
DYNAMODB_TABLE_NAME=your_dynamodb_table_name
```

### Installation

```bash
git clone https://github.com/yourusername/ai-journaling-trader.git
cd ai-journaling-trader
npm install

# Set up your environment variables in BackEnd/.env

npm run dev
```

This will start both the backend and frontend servers concurrently.
