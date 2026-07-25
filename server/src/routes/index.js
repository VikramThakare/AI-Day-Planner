const express = require("express");
const router = express.Router();

const healthRoutes = require("./health.routes");
const taskRoutes = require("./task.routes");
const authRoutes = require("./auth.routes");

router.use("/health", healthRoutes);
router.use("/api", taskRoutes);
router.use("/api/auth", authRoutes);

module.exports = router;