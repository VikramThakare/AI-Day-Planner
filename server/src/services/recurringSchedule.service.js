const RecurringSchedule = require("../models/recurringSchedule.model");

const createRecurringSchedule = async (scheduleData) => {
    return await RecurringSchedule.create(scheduleData);
};

const getRecurringSchedules = async (userId) => {
    return await RecurringSchedule.find({
        user: userId,
    }).sort({
        dayOfWeek: 1,
        startTime: 1,
    });
};

const updateRecurringSchedule = async (id, userId, scheduleData) => {
    return await RecurringSchedule.findOneAndUpdate(
        {
            _id: id,
            user: userId,
        },
        scheduleData,
        {
            new: true,
            runValidators: true,
        }
    );
};

const deleteRecurringSchedule = async (id, userId) => {
    return await RecurringSchedule.findOneAndDelete({
        _id: id,
        user: userId,
    });
};

module.exports = {
    createRecurringSchedule,
    getRecurringSchedules,
    updateRecurringSchedule,
    deleteRecurringSchedule,
};