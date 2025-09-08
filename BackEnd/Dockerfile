# Use Node.js 20 as base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the backend code from src/ into /app in container
COPY . ./

# Optional: run npm audit fix
RUN npm audit fix --force || true

# Expose the port your app listens on
EXPOSE 5000

# Start the app
CMD ["npm", "start"]

