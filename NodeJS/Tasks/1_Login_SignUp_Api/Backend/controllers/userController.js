const User = require("../Models/userModel");

const signup = async (req, res) => {
  try {
    const { userName, userEmail, userPassword } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered." });
    }

    const user = await User.create({ userName, userEmail, userPassword });

    res.status(201).json({ status: "Done", message: "User registered", user });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    const user = await User.findOne({ userEmail, userPassword });
    if (!user) {
      return res
        .status(401)
        .json({ status: "Error", message: "Invalid credentials" });
    }

    res.status(200).json({ status: "Done", message: "Login successful", user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

module.exports = { signup, login };
