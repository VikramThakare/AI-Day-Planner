const express = require("express");
const router = express.Router();

const {
    createTask,
    getTasks,
    getTask,
} = require("../controller/task.controller");

router.post("/tasks", createTask);

router.get("/tasks", getTasks);

router.get("/tasks/:id", getTask);

module.exports = router;