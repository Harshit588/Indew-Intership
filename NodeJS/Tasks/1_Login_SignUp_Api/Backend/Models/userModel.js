const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ConnectMongoWithNode");

const userSchema = new mongoose.Schema({
  userName: String,
  userEmail: String,
  userPassword: String,
});

const User = mongoose.model("SignUpLoginApi", userSchema);

module.exports = User;
