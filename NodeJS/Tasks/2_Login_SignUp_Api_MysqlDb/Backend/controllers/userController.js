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
      console.log(`ALREADY REGISTER WITH :: ${uniqueUserName}`);
      return res.status(400).json({ message: "User Name already registered." });
    }

    // Check if userEmail already exists
    const existingUser = await userSignUp.searchUserByEmail(userEmail);
    if (existingUser !== null) {
      console.log(`ALREADY REGISTER WITH :: ${userEmail}`);
      return res.status(400).json({ message: "Email already registered." });
    }

    // Check if userMobile already exists
    const existingUserMobile = await userSignUp.searchUserByUserMobile(
      userMobile
    );
    if (existingUserMobile !== null) {
      console.log(`ALREADY REGISTER WITH :: ${userMobile}`);
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
      console.log(`Missing login credentials`);

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
      console.log(`USER NOT FOUND WITH :: ${identifier}`);

      return res
        .status(401)
        .json({ status: "Error", message: "User not found" });
    }

    // Check Password is matched or not
    const isMatch = await bcrypt.compare(userPassword, user.userPassword);

    if (!isMatch) {
      return res
        .status(401)
        .json({ status: "Error", message: "Invalid password" });
    }

    console.log("LOGIN SUCCESSFULL");

    res.status(200).json({ status: "Done", message: "Login successful", user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ status: "Error", message: "Internal server error" });
  }
};

module.exports = { signup, login };
