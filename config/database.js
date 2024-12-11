const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
// set up database connection
const connect_database = mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
        .then(()=> console.log("DATABASE HAS CONNECTED"))
        .catch((err)=>console.log(err))


module.exports = connect_database;