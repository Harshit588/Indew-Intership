const userModel = require("../models/userModel");

const register = async (req, res) => {
  const { userName, userPassword } = req.body;

  const user = await userModel.createUser(userName, userPassword);
  res.json({ message: "DONE", User: user });
};

module.exports = {
  register,
};
