# Simple User Registration Backend

This project is a Node.js backend that handles user registration operations.
It is designed to be a lightweight application easily integrable with any frontend requiring user registration functionality.

## Features

- <b>User Registration</b>: <s>Provides an API to allow users to register by providing a unique username, email address, and password.</s>
- <b>Password Hashing</b>: <s>Utilizes the bcrypt algorithm to secure user passwords stored in the database.</s>
- <b>Error Handling</b>: <s>Implements error handling to respond appropriately to errors during the registration process.</s>

## Technologies Used

- Node.js: Backend based on Node.js for handling HTTP requests.
- Express.js: Lightweight web framework for handling routes and requests.
- MongoDB: NoSQL database used for storing user data.
- Mongoose: Data modeling library to simplify interaction with MongoDB from the backend.

## Installation

1. Clone the repository to your computer.
2. Ensure you have Node.js and MongoDB installed in your system.
3. Run <sup>npm install</sup> to install dependencies.
4. Set up environment variables in the <sup>.env</sup> file.
5. Start the server with <sup>npm start</sup>.

## Environment Variable Configuration

The backend uses environment variables for configuration. Make sure to properly configure these variables before starting the server.

- PORT: The port on which the server will run.
- MONGODB_URI: The URI for connecting to MongoDB database.
- SECRET_KEY: Secret key used for signing JWT tokens.

# This project is licensed under the terms of the MIT license.
