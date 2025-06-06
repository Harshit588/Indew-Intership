const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ConnectMongoWithNode");

const userSchema = new mongoose.Schema(
  {
    userName: String,
    uniqueUserName: String,
    userEmail: String,
    userMobile: String,
    userPassword: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("SignUpLoginApi", userSchema);

module.exports = User;
