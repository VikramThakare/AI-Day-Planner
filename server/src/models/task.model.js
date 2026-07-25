const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        default: ""
    },

    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "MEDIUM"
    },

    estimatedDuration: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: ["PENDING", "IN_PROGRESS", "COMPLETED"],
        default: "PENDING"
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Task", taskSchema);