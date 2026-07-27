const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth.middleware");

const {
    testAI,
    generateDay,
} = require("../controller/ai.controller");

router.post("/test", authMiddleware, testAI);
router.post("/generate-day", authMiddleware, generateDay);
module.exports = router;