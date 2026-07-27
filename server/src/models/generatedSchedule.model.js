const mongoose = require("mongoose");

const generatedScheduleSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        date: {
            type: Date,
            required: true,
        },

        events: [
            {
                title: String,

                startTime: String,

                endTime: String,

                category: String,

                source: {
                    type: String,
                    enum: ["recurring", "task", "ai"],
                },

                completed: {
                    type: Boolean,
                    default: false,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "GeneratedSchedule",
    generatedScheduleSchema
);