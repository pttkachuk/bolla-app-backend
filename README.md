# Simple User Registration Backend

This project is a Node.js backend that handles user registration operations.
It is designed to be a lightweight application easily integrable with any frontend requiring user registration functionality.

## Features

- User Registration: Provides an API to allow users to register by providing a unique username, email address, and password.
- Password Hashing: Utilizes the bcrypt algorithm to secure user passwords stored in the database.
- Error Handling: Implements error handling to respond appropriately to errors during the registration process.

## Technologies Used

- Node.js: Backend based on Node.js for handling HTTP requests.
- Express.js: Lightweight web framework for handling routes and requests.
- MongoDB: NoSQL database used for storing user data.
- Mongoose: Data modeling library to simplify interaction with MongoDB from the backend.

## Installation

- Clone the repository to your computer.
- Ensure you have Node.js and MongoDB installed in your system.
- Run npm install to install dependencies.
- Set up environment variables in the .env file.
- Start the server with npm start.

## Environment Variable Configuration

The backend uses environment variables for configuration. Make sure to properly configure these variables before starting the server.

- PORT: The port on which the server will run.
- MONGODB_URI: The URI for connecting to MongoDB database.
- SECRET_KEY: Secret key used for signing JWT tokens.

## This project is licensed under the terms of the MIT license.
