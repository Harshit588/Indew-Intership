const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root12345",
  database: "indew_intern",
  port: 3333,
});

// Test DB connection on server start
pool.getConnection((err, connection) => {
  if (err) {
    console.error("DB connection failed:", err.message);
  } else {
    console.log("DB connected successfully");
    connection.release();
  }
});

module.exports = pool.promise();
