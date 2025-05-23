const userController = require("../controllers/userController");
const express = require("express");
const route = express.Router();

route.post("/signup", userController.signUp);

module.exports = route;
