const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost:27017/ConnectMongoWithNode`);

const userSchema = mongoose.Schema({
  name: String,
  UserName: String,
  Email: String,
});

module.exports = mongoose.model("User", userSchema);
