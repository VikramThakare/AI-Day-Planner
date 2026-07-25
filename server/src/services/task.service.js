const Task = require("../models/task.model");

const createTask = async (taskData) => {
    return await Task.create(taskData);
};

const getAllTasks = async () => {
    return await Task.find();
};

const getTaskById = async (id) => {
    return await Task.findById(id);
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
};