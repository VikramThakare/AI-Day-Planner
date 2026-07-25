const express = require("express");
const router = express.Router();

const {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask,
} = require("../controller/task.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/tasks", authMiddleware, createTask);

router.get("/tasks", authMiddleware, getTasks);

router.get("/tasks/:id", authMiddleware, getTask);

router.put("/tasks/:id", authMiddleware, updateTask);

router.delete("/tasks/:id", authMiddleware, deleteTask);

module.exports = router;