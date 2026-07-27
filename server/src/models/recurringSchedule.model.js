const mongoose = require("mongoose");

const recurringScheduleSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },

        dayOfWeek: {
    type: Number,
    min: 0,
    max: 6,
    required: true,
},

        startTime: {
            type: String,
            required: true,
        },

        endTime: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            enum: [
                "college",
                "work",
                "gym",
                "sports",
                "meal",
                "sleep",
                "other",
            ],
            default: "other",
        },

        isFlexible: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "RecurringSchedule",
    recurringScheduleSchema
);