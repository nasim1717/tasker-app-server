const mongoose = require("mongoose");
const tasksSchema = require("../schemas/taskSchema");
const Task = mongoose.model("Task", tasksSchema);

// add tasks
async function addTasks(req, res) {
    try {
        const newTasks = new Task({
            ...req.body,
            userId: req.userId,
        });
        const resultNewTaks = await newTasks.save();
        res.status(200).json({
            status: true,
            message: "Added a new goal",
            data: resultNewTaks
        })
    } catch (err) {
        res.status(500).json({
            status: true,
            message: "Something is wrong please try again!",
        })
    }
};

// editTasks
async function editTasks(req, res) {
    try {
        const resEditTask = await Task.findByIdAndUpdate({ _id: req.params.id }, { $set: { ...req.body } }, { new: true });
        res.status(200).json({
            status: true,
            message: "Update successfull!",
            data: resEditTask,
        });
        // console.log("edit task-->", resEditTask);
    } catch (err) {
        // console.log("err-->", err)
        res.status(500).json({
            status: false,
            message: "This goal not edit peease try again!",
        })
    }
};

// delete tasks
async function deleteTasks(req, res) {
    try {
        const deleteTask = await Task.deleteOne({ _id: req.params.id });
        res.status(200).json({
            status: true,
            message: "Task delete successfull!"
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "This task not delete peease try again!",
        })
    }
}

// get all tasks
async function allTasks(req, res) {
    try {
        const userId = req.userId;
        const getAllTasks = await Task.find({ userId });
        res.status(200).json({
            status: true,
            message: "Get All Tasks",
            data: getAllTasks
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Somthing is wrong plaease try again!",

        });
    }
}

// complete tasks
async function complete(req, res) {
    try {
        const userId = req.userId;
        const getAllTasks = await Task.find({ userId, complete: true });
        res.status(200).json({
            status: true,
            message: "Get all complete Tasks",
            data: getAllTasks
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Somthing is wrong plaease try again!",

        });
    }
};

// inprogress
async function progress(req, res) {
    try {
        const userId = req.userId;
        const getAllTasks = await Task.find({ userId, inprogress: true });
        res.status(200).json({
            status: true,
            message: "Get all inprogress",
            data: getAllTasks
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Somthing is wrong plaease try again!",

        });
    }
};

// favourite
async function favourite(req, res) {
    try {
        const userId = req.userId;
        const getAllTasks = await Task.find({ userId, favourite: true });
        res.status(200).json({
            status: true,
            message: "Get All favourite",
            data: getAllTasks
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            message: "Somthing is wrong plaease try again!",

        });
    }
}

module.exports = {
    addTasks,
    editTasks,
    deleteTasks,
    allTasks,
    complete,
    progress,
    favourite
}