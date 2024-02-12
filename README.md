<!DOCTYPE html>
<html>
<head>
<style>
    body{
        background-color: white;
    }
</style>
</head>
<body>

# Simple User Registration Backend

This project is a Node.js backend that handles user registration operations.
It is designed to be a lightweight application easily integrable with any frontend requiring user registration functionality.

## Features

- <b>User Registration</b>: Provides an API to allow users to register by providing a unique username, email address, and password.
- <b>Password Hashing</b>: >Utilizes the bcrypt algorithm to secure user passwords stored in the database.
- <b>Error Handling</b>: Implements error handling to respond appropriately to errors during the registration process.

## Technologies Used

- <b>Node.js</b>: Backend based on Node.js for handling HTTP requests.
- <b>Express.js</b>: Lightweight web framework for handling routes and requests.
- <b>MongoDB</b>: NoSQL database used for storing user data.
- <b>Mongoose</b>: Data modeling library to simplify interaction with MongoDB from the backend.

## Installation

1. Clone the repository to your computer.
2. Ensure you have Node.js and MongoDB installed in your system.
3. Run <b>npm install</b> to install dependencies.
4. Set up environment variables in the <b>.env</b> file.
5. Start the server with <b>npm start</b>.

## Environment Variable Configuration

The backend uses environment variables for configuration. Make sure to properly configure these variables before starting the server.

- <b>PORT</b>: The port on which the server will run.
- <b>MONGODB_URI</b>: The URI for connecting to MongoDB database.
- <b>SECRET_KEY</b>: Secret key used for signing JWT tokens.

# This project is licensed under the terms of the MIT license.

</body>
</html>
