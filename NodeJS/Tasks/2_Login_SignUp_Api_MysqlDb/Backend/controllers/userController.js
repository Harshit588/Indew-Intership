const userSignUp = require("../Models/userSignUp");
const userLogin = require("../Models/userLogin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");

const signup = async (req, res) => {
  try {
    console.log("All fields:", req.body);
    console.log("Uploaded file:", req.file ? req.file.originalname : "No file");

    console.log("File received:", req.file ? "Yes ✅" : "No ❌");

    const { userName, uniqueUserName, userEmail, userMobile, userPassword } =
      req.body;

    // Check if uniqueUserName already exists
    const existingUserName = await userSignUp.searchUserByUniqueUserName(
      uniqueUserName
    );
    if (existingUserName !== null) {
      console.log(`ALREADY REGISTERED WITH :: ${uniqueUserName}`);
      return res.status(400).json({ message: "User Name already registered." });
    }

    // Check if userEmail already exists
    const existingUser = await userSignUp.searchUserByEmail(userEmail);
    if (existingUser !== null) {
      console.log(`ALREADY REGISTERED WITH :: ${userEmail}`);
      return res.status(400).json({ message: "Email already registered." });
    }

    // Check if userMobile already exists
    const existingUserMobile = await userSignUp.searchUserByUserMobile(
      userMobile
    );
    if (existingUserMobile !== null) {
      console.log(`ALREADY REGISTERED WITH :: ${userMobile}`);
      return res
        .status(400)
        .json({ message: "User Mobile Number already registered." });
    }

    // Create the user with buffer-based photo
    console.log("File :: " + req.userPhoto);

    // bcrypt the password
    const hashedPassword = await bcrypt.hash(userPassword, 10);

    const user = await userSignUp.createUser({
      userName,
      uniqueUserName,
      userEmail,
      userMobile,
      userPassword: hashedPassword,
      userPhoto: req.file ? req.file.buffer : null,
    });

    console.log("New user registered:", user.userEmail);
    res.status(201).json({ status: "Done", message: "User registered", user });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    console.log(req.body);

    const { identifier, userPassword } = req.body;

    if (!identifier || !userPassword) {
      console.log(`Missing login credentials`);
      return res
        .status(400)
        .json({ status: "Error", message: "Missing login credentials" });
    }

    let user = null;

    // Try login by email
    user = await userLogin.loginWithEmail(identifier);
    console.log("User ::", user);

    // If not found, try login by uniqueUserName
    if (!user) {
      user = await userLogin.loginWithUserName(identifier);
    }

    // If still not found, try login by phone number
    if (!user) {
      user = await userLogin.loginWithMobile(identifier);
    }

    if (!user) {
      console.log(`USER NOT FOUND WITH :: ${identifier}`);
      return res
        .status(401)
        .json({ status: "Error", message: "User not found" });
    }

    // Check password
    const isMatch = await bcrypt.compare(userPassword, user.userPassword);

    if (!isMatch) {
      return res
        .status(401)
        .json({ status: "Error", message: "Invalid password" });
    }

    // Sign JWT token
    const token = jwt.sign({ user: user.userEmail }, "EEMMAAIILL", {
      expiresIn: "1d",
    });

    // Set cookie
    res.cookie("Email", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });

    console.log("LOGIN SUCCESSFUL");

    res.status(200).json({ status: "Done", message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

const dashboard = (req, res) => {
  res.redirect(
    "http://localhost:5501/NodeJS/Tasks/2_Login_SignUp_Api_MysqlDb/FrontEnd/dashboard.html"
  );
};

const logout = (req, res) => {
  res.clearCookie("Email");
  res.status(200).json({ status: "Done", message: "Logout successful" });
};

module.exports = { signup, login, dashboard, logout };
