const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const path = require("path");

exports.register = async (req, res) => {
  const { username, email, password, confirmPassword, role } = req.body;

  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).send("All fields are required");
  }

  if (password !== confirmPassword) {
    return res.status(400).send("Passwords do not match");
  }

  try {
    const existing = await userModel.findUserByEmail(email);
    if (existing) return res.status(400).send("Email already exists");

    const hashedPassword = await bcrypt.hash(password, 10);

    // 👇 Default role to 'user' if nothing is provided
    const userRole =
      role && ["user", "admin"].includes(role.toLowerCase())
        ? role.toLowerCase()
        : "user";

    await userModel.createUser(username, email, hashedPassword, userRole);

    res.render("login");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findUserByEmail(email);

  if (!user) return res.status(401).send("Invalid credentials");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).send("Invalid credentials");

  if (user.role === "admin") {
    return res.sendFile(path.join(__dirname, "../views/admin.html"));
  } else {
    return res.sendFile(path.join(__dirname, "../views/user.html"));
  }
};
