const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const signUp = async (req, res) => {
  try {
    const { userName, userEmail, userPassword, userAge } = req.body;

    if (!userName || !userEmail || !userPassword) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const hashedPassword = await bcrypt.hash(userPassword, 10);

    const insertId = await userModel.createUser(
      userName,
      userEmail,
      hashedPassword,
      userAge
    );

    return res.status(201).json({
      message: "User registered successfully",
      userId: insertId,
    });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ error: "Email already in use" });
    }
    console.error("Signup error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { userEmail, userPassword } = req.body;
  const user = await userModel.getUserByEmail(userEmail);
  if (user === null) {
    return res.status(404).json({ message: "User Not Found" });
  }
  const isMatch = await bcrypt.compare(userPassword, user.userPassword);
  res.send(isMatch);
};

module.exports = { signUp, login };
