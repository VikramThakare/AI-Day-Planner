const express = require("express");
const router = express.Router();

const healthRoutes = require("./health.routes");
const taskRoutes = require("./task.routes");

router.use("/health", healthRoutes);
router.use("/api", taskRoutes);

module.exports = router;