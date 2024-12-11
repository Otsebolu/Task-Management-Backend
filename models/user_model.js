const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    country: { type: String },
    email: { type: String },
    password: { type: String }
})

const userSchema = new mongoose.model("UserModel", user)  //UserModel = name of the model
module.exports = userSchema