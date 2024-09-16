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
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }

});

module.exports = taskSchema;