const {
    createTask: createTaskService,
    getAllTasks,
    getTaskById,
} = require("../services/task.service");

const createTask = async (req, res) => {
    try {
        const task = await createTaskService(req.body);

        res.status(201).json({
            success: true,
            data: task,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await getAllTasks();

        res.status(200).json({
            success: true,
            data: tasks,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

const getTask = async (req, res) => {
    try {
        const task = await getTaskById(req.params.id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found",
            });
        }

        res.status(200).json({
            success: true,
            data: task,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createTask,
    getTasks,
    getTask,
};