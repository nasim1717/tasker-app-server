const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    inprogress: {
        type: Boolean,
        default: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    favourite: {
        type: Boolean,
        default: false
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }

});

module.exports = taskSchema;