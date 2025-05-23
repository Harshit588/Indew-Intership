const userSignUp = require("../Models/userSignUp");
const userLogin = require("../Models/userLogin");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { userName, uniqueUserName, userEmail, userMobile, userPassword } =
      req.body;

    // Check if uniqueUserName already exists
    const existingUserName = await userSignUp.searchUserByUniqueUserName(
      uniqueUserName
    );
    if (existingUserName !== null) {
      return res.status(400).json({ message: "User Name already registered." });
    }

    // Check if userEmail already exists
    const existingUser = await userSignUp.searchUserByEmail(userEmail);
    if (existingUser !== null) {
      return res.status(400).json({ message: "Email already registered." });
    }

    // Check if userMobile already exists
    const existingUserMobile = await userSignUp.searchUserByUserMobile(
      userMobile
    );
    if (existingUserMobile !== null) {
      return res
        .status(400)
        .json({ message: "User Mobile Number already registered." });
    }

    // bcrupt the password
    const hashedPassword = await bcrypt.hash(userPassword, 10);

    // Create the user
    const user = await userSignUp.createUser({
      userName,
      uniqueUserName,
      userEmail,
      userMobile,
      hashedPassword,
    });

    res.status(201).json({ status: "Done", message: "User registered", user });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { identifier, userPassword } = req.body;

    if (!identifier || !userPassword) {
      return res
        .status(400)
        .json({ status: "Error", message: "Missing login credentials" });
    }

    let user = null;

    // Try login by email
    user = await userLogin.loginWithEmail(identifier);

    // If not found, try login by uniqueUserName
    if (!user) {
      user = await userLogin.loginWithUserName(identifier);
    }

    // If still not found, try login by phone number
    if (!user) {
      user = await userLogin.loginWithMobile(identifier);
    }

    if (!user) {
      return res
        .status(401)
        .json({ status: "Error", message: "User not found" });
    }

    // bcrupt the password
    const hashedPassword = await bcrypt.hash(userPassword, 10);

    // campare(verify) the password
    const isMatch = await bcrypt.compare(userPassword, hashedPassword);

    if (!isMatch) {
      return res
        .status(401)
        .json({ status: "Error", message: "Invalid password" });
    }

    res.status(200).json({ status: "Done", message: "Login successful", user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

module.exports = { signup, login };
