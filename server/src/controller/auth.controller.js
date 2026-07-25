const {
    registerUser,
    loginUser,
} = require("../services/auth.service");

const register = async (req, res) => {
    try {
        const result = await registerUser(req.body);

        res.status(201).json({
            success: true,
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await loginUser(email, password);

        res.status(200).json({
            success: true,
            data: result,
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};

const profile = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            data: req.user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    register,
    login,
    profile,
};