const {
    createRecurringSchedule,
    getRecurringSchedules,
    updateRecurringSchedule,
    deleteRecurringSchedule,
} = require("../services/recurringSchedule.service");

const createRecurring = async (req, res) => {
    try {
        const schedule = await createRecurringSchedule({
            ...req.body,
            user: req.user._id,
        });

        res.status(201).json({
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

const getRecurring = async (req, res) => {
    try {
        const schedules = await getRecurringSchedules(req.user._id);

        res.status(200).json({
            success: true,
            data: schedules,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

const updateRecurring = async (req, res) => {
    try {
        const schedule = await updateRecurringSchedule(
            req.params.id,
            req.user._id,
            req.body
        );

        if (!schedule) {
            return res.status(404).json({
                success: false,
                message: "Recurring schedule not found",
            });
        }

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

const deleteRecurring = async (req, res) => {
    try {
        const schedule = await deleteRecurringSchedule(
            req.params.id,
            req.user._id
        );

        if (!schedule) {
            return res.status(404).json({
                success: false,
                message: "Recurring schedule not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Recurring schedule deleted successfully",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};

module.exports = {
    createRecurring,
    getRecurring,
    updateRecurring,
    deleteRecurring,
};