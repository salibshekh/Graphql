# Use the official Node.js Alpine image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Set environment variable
 ENV MONGO_URL="mongodb+srv://admin:hT6vKdAc94nmvCTk@cluster0.rcxxjt7.mongodb.net/graphqlDB?retryWrites=true&w=majority&appName=Cluster0"

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Expose the port that your app will run on
EXPOSE 3000

# Define the command to run your app
CMD [ "npm", "start" ]
