const User = require("../Models/userModel");

const signup = async (req, res) => {
  try {
    const { userName, uniqueUserName, userEmail, userMobile, userPassword } =
      req.body;

    // Check if userEmail already exists
    const existingUser = await User.findOne({ userEmail });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered." });
    }

    // Check if userName already exists
    const existingUserName = await User.findOne({ uniqueUserName });
    if (existingUserName) {
      return res.status(400).json({ message: "User Name already registered." });
    }
    // Check if userMobile already exists
    const existingUserMobile = await User.findOne({ userMobile });
    if (existingUserMobile) {
      return res
        .status(400)
        .json({ message: "User Mobile Number already registered." });
    }

    console.log(req.body);

    const user = await User.create({
      userName,
      uniqueUserName,
      userEmail,
      userMobile,
      userPassword,
    });

    res.status(201).json({ status: "Done", message: "User registered", user });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    // Check UserEmail exist or not
    const user = await User.findOne({ userEmail });
    if (!user) {
      return res
        .status(401)
        .json({ status: "Error", message: "Invalid Email" });
    }

    // Check Password is Same or not
    if (user.userPassword === userPassword) {
      res
        .status(200)
        .json({ status: "Done", message: "Login successful", user });
    } else {
      return res
        .status(401)
        .json({ status: "Error", message: "Invalid Password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

module.exports = { signup, login };
