const pool = require("../config/MySqlDb");

// LOGIN with Mobile + Password
const loginWithMobile = async (userMobile) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM signupusers WHERE userMobile = ?",
      [userMobile]
    );
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error in loginWithMobile:", error);
    throw error;
  }
};

// LOGIN with Email + Password
const loginWithEmail = async (userEmail) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM signupusers WHERE userEmail = ?",
      [userEmail]
    );
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error in loginWithEmail:", error);
    throw error;
  }
};

// LOGIN with uniqueUserName + Password
const loginWithUserName = async (uniqueUserName) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM signupusers WHERE uniqueUserName = ?",
      [uniqueUserName]
    );
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error in loginWithUserName:", error);
    throw error;
  }
};

module.exports = {
  loginWithMobile,
  loginWithEmail,
  loginWithUserName,
};
