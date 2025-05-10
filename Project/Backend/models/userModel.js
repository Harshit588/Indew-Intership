const db = require("../config/db");

const findUserByEmail = async (email) => {
  const [result] = await db.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);
  return result[0];
};

const createUser = async (username, email, hashedPassword, role) => {
  await db.query(
    "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
    [username, email, hashedPassword, role]
  );
};

module.exports = { findUserByEmail, createUser };
