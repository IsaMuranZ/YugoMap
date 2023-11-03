# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the app dependencies inside the container
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose port 3000 (or whatever port your app runs on)
EXPOSE 5173

# Define the command to run the app
CMD ["npm", "start"]
