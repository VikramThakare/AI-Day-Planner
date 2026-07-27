const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
    createRecurring,
    getRecurring,
    updateRecurring,
    deleteRecurring,
} = require("../controller/recurringSchedule.controller");

router.post("/", authMiddleware, createRecurring);

router.get("/", authMiddleware, getRecurring);

router.put("/:id", authMiddleware, updateRecurring);

router.delete("/:id", authMiddleware, deleteRecurring);

module.exports = router;