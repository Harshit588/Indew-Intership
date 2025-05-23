const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  try {
    const { userName, userEmail, userPassword, userAge } = req.body;

    // 1 Basic validation (replace with JOI/express-validator in real code)
    if (!userName || !userEmail || !userPassword) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // 2️ Hash password
    const hashedPassword = await bcrypt.hash(userPassword, 10);

    // 3️ Create user in DB
    const insertId = await userModel.createUser(
      userName,
      userEmail,
      hashedPassword,
      userAge
    );

    // 4️ Success response
    return res.status(201).json({
      message: "User registered successfully",
      userId: insertId,
    });
  } catch (err) {
    // Duplicate email?
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ error: "Email already in use" });
    }
    console.error("Signup error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { signUp };
