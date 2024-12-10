# Using the official Node.js image
FROM mcr.microsoft.com/playwright:v1.28.1-jammy

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Open the port (if required)
EXPOSE 9323

# Run the command to perform tests
CMD ["sh", "-c", "npm install && npx playwright test && npx playwright show-report"]


