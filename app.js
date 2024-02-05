const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
//console.log(process.env);

const { DB_HOST } = process.env;

mongoose.set('strictQuery', false);

mongoose.connect(DB_HOST)
    .then(() => console.log('database connected'))
    .catch((error) => console.log(error.message))