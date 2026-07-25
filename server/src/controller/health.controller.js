const { getHealthStatus } = require("../services/health.service");

const healthCheck = (req, res) => {
    const result = getHealthStatus();
    res.json(result);
};

module.exports = {
    healthCheck
};