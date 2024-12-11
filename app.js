//To create express app
//call express
const express = require('express');
//calling other dependencies installed
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const connect_database = require('./config/database');
const user_route = require('./routes/user_route');
const task_route = require('./routes/task_route');

dotenv.config()

//initialiaze the express app
const app = express()

// make use of some of the installed dependencies
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'))

// use the router also
// "/user" is the base url for the user routes or endpoints
// when we want to create a new user using the endpoint, it will be /user/createUser
app.use('/user', user_route);
app.use('/task', task_route);

// call the PORT variable from .env
const PORT = process.env.PORT

// listen/start the express app

app.listen(PORT, ()=> console.log("EXPRESS APP STARTED ON PORT " + PORT))
connect_database;