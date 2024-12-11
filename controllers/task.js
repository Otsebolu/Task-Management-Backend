// import the task model from the model folder (user_model)
const TaskModel = require('../models/task_model');    //UserModel =called from user_model.js

// create a new task
//createNewUser = "function name" that defines the task to be done
const createNewTask = async (req, res) => {
    // take in the values from the request body
    const { taskName, isCompleted, taskOwner, taskDescription } = req.body;

    // put the values in the newly created task model
    const newTask = new TaskModel({ taskName, isCompleted, taskOwner, taskDescription })

    //save the newTask to database
    await newTask.save()

    //return a response
    return res.status(201).json(newTask)

}

//function to update a task
const updateTask = async (req, res) => {
    const { id } = req.params; // Task ID to update
        const updates = req.body; // Fields to update

        // Find task by ID and update it
        const task = await TaskModel.findByIdAndUpdate(id, updates, {
            new: true, // Return the updated document
            runValidators: true, // Ensure validation rules are enforced
        });

    if (!task) {
        return res.status(404).json("task not found")
    }

    return res.status(200).json("successfully updated")
}


//function to delete a task
const deleteTask = async (req, res) => {
    const { id } = req.params; // Task ID to delete

        // Find task by ID and update it
        const taskd = await TaskModel.findByIdAndDelete(id);

    if (!taskd) {
        return res.status(404).json("task not found")
    }

    return res.status(200).json("successfully deleted")
}


// Controller function to retrieve a task by ID
const getTaskById = async (req, res) => {
    try {
        const taskId = req.params.id; // Get the task ID from the request parameters
        const task = await TaskModel.findById(taskId); // Retrieve the task from the database

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json(task); // Send the retrieved task as the response
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

//export createNewUser
module.exports = { createNewTask, updateTask, deleteTask, getTaskById };
//createNewUser= we pass the function to the route or endpoint
//createNewUser = function name that defines all the tasks to be done