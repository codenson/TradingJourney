# ./FrontEnd/client/Dockerfile
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies, ignoring peer dependency conflicts
RUN npm install --legacy-peer-deps

# Copy the rest of the source code
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]

