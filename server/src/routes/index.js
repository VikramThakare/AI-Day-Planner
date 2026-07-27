const express = require("express");
const router = express.Router();

const healthRoutes = require("./health.routes");
const taskRoutes = require("./task.routes");
const authRoutes = require("./auth.routes");
const aiRoutes = require("./ai.routes");
const recurringRoutes = require("./recurringSchedule.routes");

router.use("/health", healthRoutes);
router.use("/api", taskRoutes);
router.use("/api/auth", authRoutes);
router.use("/api/ai", aiRoutes);
router.use("/api/recurring", recurringRoutes);

module.exports = router;