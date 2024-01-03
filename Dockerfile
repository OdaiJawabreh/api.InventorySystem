#docker file # Use an official Node.js runtime as the base image
FROM node:20.8.0
# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install application dependencies
RUN npm i
# Copy the rest of the application source code
COPY . .
# Expose the port your Nest.js application listens on (e.g., 3000)
EXPOSE 8080
# Define the command to run your Nest.js application
CMD ["npm", "run", "start:dev"] 