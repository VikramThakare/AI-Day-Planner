const { generateResponse } = require("../ai/gemini.service");
const { generateDayPlan } = require("../ai/planner.service");

const testAI = async (req, res) => {
    try {
        const { prompt } = req.body;

        const answer = await generateResponse(prompt);

        res.status(200).json({
            success: true,
            answer,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

const generateDay = async (req, res) => {
    try {

        const schedule = await generateDayPlan(req.user._id);

        res.status(200).json({
            success: true,
            data: schedule,
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message,
        });

    }
};

module.exports = {
    testAI,
    generateDay,
};