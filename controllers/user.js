// import the user model from the model folder (user_model)
const UserModel = require('../models/user_model');    //UserModel =called from user_model.js

// create a new user
const createNewUser = async (req, res) => {
    // take in the values from the request body
    const { firstName, lastName, country, email, password } = req.body;

    // put the values in the newly created user model
    const newUser = new UserModel({firstName, lastName, country, email, password})

    //save the newUser to database
    await newUser.save()

    //return a response
    return res.status(201).json(newUser)

}


//function to update a user
const updateUser = async (req, res) => {
    const { id } = req.params; // User ID to update
        const updates = req.body; // Fields to update

        // Find task by ID and update it
        const user = await UserModel.findByIdAndUpdate(id, updates, {
            new: true, // Return the updated document
            runValidators: true, // Ensure validation rules are enforced
        });

    if (!user) {
        return res.status(404).json("user not found")
    }

    return res.status(200).json("successfully updated")
}

//function to delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params; // User ID to delete

        // Find task by ID and update it
        const userd = await UserModel.findByIdAndDelete(id);

    if (!userd) {
        return res.status(404).json("user not found")
    }

    return res.status(200).json("successfully deleted")
}


// Controller function to retrieve a user by ID
const getUserById = async (req, res) => {
    try {
        const userId = req.params.id; // Get the user ID from the request parameters
        const user = await UserModel.findById(userId); // Retrieve the task from the database

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user); // Send the retrieved user as the response
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

//export createNewUser
module.exports = { createNewUser, updateUser, deleteUser, getUserById };
//createNewUser= we pass the function to the route or oendpoint
//createNewUser = function name that defines all the tasks to be done