const pool = require("../config/dbMysql");

const findUserByName = async (userName) => {
  const [rows] = await pool.query("select * from users where username = ?", [
    userName,
  ]);

  console.log(rows);
};

const createUser = async (userName, userPassword) => {
  const user = pool.query(
    "insert into users (userName,userPassword) values(?,?)",
    [userName, userPassword]
  );

  console.log(user);
  return user;
};

module.exports = {
  findUserByName,
  createUser,
};
