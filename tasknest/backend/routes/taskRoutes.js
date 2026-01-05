const express = require("express");
const Task = require("../models/Task");
const router = express.Router();

// Get all tasks
router.get("/", async (req, res) =>{
    const tasks = await Task.find();
    res.json(tasks);
});


// Add task 
router.post("/", async(req,res)=>{
    const newTask = new Task({title: req.body.title});
    const savedTask = await newTask.save();
    res.json(savedTask);
})

// Update task 
// router.put("/:id", async(req,res)=>{
//     const updateTask = await Task.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         {new : true}
//     );
//     res.json(updateTask);
// })

// Toggle task completed status

router.put("/:id", async (req,res)=>{
    const task = await Task.findById(req.params.id);

    if(!task){
        return res.status(404).json({message : "Task not Found"});
    }

    // toggle boolean value 
    task.completed = !task.completed
    await task.save();

    res.json(task);
})


// Delete task 
router.delete("/:id", async (req, res)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.json({message : "Task deleted"});
})
module.exports = router;