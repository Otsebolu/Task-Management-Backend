// import the router from express (default function inside express package) 
const router = require('express').Router();

//import the function you want to add to the endpoint (import it from controller)
const {createNewTask, updateTask, deleteTask, getTaskById} = require('../controllers/task')

// there are different router methods
// 1 - GET - to retrieve data
// 2 - POST - to add data
// 3 - PATCH -  to update
// 4 - DELETE - to delete data

// format to create the route is "router.method('/name_you_want_to_give_the_endpoint', the_function_name(createNewUser))"

// create the endpoint for "createNewUser" function
router.post('/createtask', createNewTask)  //createNewTask=function from task.js in controller

router.patch('/updatetask/:id', updateTask)  //updateTask=function from task.js in controller

router.delete('/delete/:id', deleteTask)
router.get('/get/:id', getTaskById)

module.exports = router;