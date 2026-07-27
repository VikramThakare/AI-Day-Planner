const { generateResponse } = require("./gemini.service");
const { buildPlannerPrompt } = require("./prompt");

const Task = require("../models/task.model");
const RecurringSchedule = require("../models/recurringSchedule.model");
const GeneratedSchedule = require("../models/generatedSchedule.model");


const generateDayPlan = async (userId) => {

    const today = new Date();

    const day = today.getDay();

    const recurring = await RecurringSchedule.find({
        user: userId,
        dayOfWeek: day,
    });

    const tasks = await Task.find({
    user: userId,
    completed: false,
});

    const prompt = buildPlannerPrompt({
        recurring,
        tasks,
    });
    console.log(prompt);

    const response = await generateResponse(prompt);
    console.log("Gemini Response:");
    console.log(response);

    const parsed = JSON.parse(response);
    console.log(parsed);

    await GeneratedSchedule.findOneAndDelete({
        user: userId,
        date: {
            $gte: new Date(today.setHours(0,0,0,0)),
            $lt: new Date(today.setHours(23,59,59,999))
        }
    });

    const schedule = await GeneratedSchedule.create({
        user: userId,
        date: new Date(),
        events: parsed.events,
    });

    return schedule;
};

module.exports = {
    generateDayPlan,
};