const mongoose = require('mongoose');

const task = new mongoose.Schema({
    taskName: { type: String },
    taskDescription: { type: String },
    isCompleted: { type: Boolean },
    taskOwner: { type: String }
})

const taskSchema = new mongoose.model("TaskModel", task)

module.exports = taskSchema