const db = require("../config/mySqlDB");

// Create user
const createUser = async (userName, userEmail, userPassword, userAge) => {
  try {
    const [result] = await db.query(
      "INSERT INTO users (userName, userEmail, userPassword, userAge) VALUES (?, ?, ?, ?)",
      [userName, userEmail, userPassword, userAge]
    );
    return result; // return new user's ID
  } catch (err) {
    console.error("Error creating user:", err);
    throw err;
  }
};

// Get user by email
const getUserByEmail = async (userEmail) => {
  try {
    const [rows] = await db.query("SELECT * FROM users WHERE userEmail = ?", [
      userEmail,
    ]);
    return rows.length ? rows[0] : null;
  } catch (err) {
    console.error("Error fetching user:", err);
    throw err;
  }
};

module.exports = {
  createUser,
  getUserByEmail,
};
