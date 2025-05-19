const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "Indew_Intern",
  waitForConnections: true,
  connectionLimit: 10,
});

console.log("DB CONNECTED");

module.exports = pool.promise();
