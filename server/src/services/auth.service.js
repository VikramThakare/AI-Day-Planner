const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../utils/jwt");


const registerUser = async (userData) => {
    const { name, email, password } = userData;

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        throw new Error("User already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    // Generate JWT
    const token = generateToken(user._id);

    return {
        user,
        token,
    };
};


const loginUser = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("Invalid credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    const token = generateToken(user._id);

    return {
        user,
        token,
    };
};

module.exports = {
    registerUser,
    loginUser,
};