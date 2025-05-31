const userController = require("../controllers/userController");
const express = require("express");
const route = express.Router();

route.post("/signup", userController.signUp);

route.post("/login", userController.login);

module.exports = route;
