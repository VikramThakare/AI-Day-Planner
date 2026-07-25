const Task = require("../models/task.model");

const createTask = async (taskData) => {
    return await Task.create(taskData);
};

const getAllTasks = async (userId) => {
    return await Task.find({ user: userId });
};

const getTaskById = async (id, userId) => {
    return await Task.findOne({
        _id: id,
        user: userId,
    });
};

const updateTask = async (id, userId, taskData) => {
    return await Task.findOneAndUpdate(
        {
            _id: id,
            user: userId,
        },
        taskData,
        {
            new: true,
            runValidators: true,
        }
    );
};

const deleteTask = async (id, userId) => {
    return await Task.findOneAndDelete({
        _id: id,
        user: userId,
    });
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
};