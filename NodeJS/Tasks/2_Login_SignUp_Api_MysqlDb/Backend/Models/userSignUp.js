const pool = require("../config/MySqlDb");

// Create a User
const createUser = async ({
  userName,
  uniqueUserName,
  userEmail,
  userMobile,
  userPassword,
}) => {
  try {
    const [result] = await pool.query(
      "INSERT INTO signupusers (userName, uniqueUserName, userEmail, userMobile, userPassword) VALUES (?, ?, ?, ?, ?)",
      [userName, uniqueUserName, userEmail, userMobile, userPassword]
    );
    return result;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Check the email is Already registered or not
const searchUserByEmail = async (userEmail) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM signupusers WHERE userEmail = ?",
      [userEmail]
    );
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Check the email is Already registered or not
const searchUserByUniqueUserName = async (uniqueUserName) => {
  try {
    const [rows] = await pool.query(
      "select * from signupusers where uniqueUserName=?",
      uniqueUserName
    );
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

// Check the email is Already registered or not
const searchUserByUserMobile = async (userMobile) => {
  try {
    const [result] = await pool.query(
      "select * from signupusers where userMobile=?",
      userMobile
    );
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

module.exports = {
  createUser,
  searchUserByEmail,
  searchUserByUniqueUserName,
  searchUserByUserMobile,
};
