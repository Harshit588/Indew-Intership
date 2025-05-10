const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController"); // Import controller

// GET Pages
router.get("/", (req, res) => res.render("home"));
router.get("/login", (req, res) => res.render("login"));
router.get("/register", (req, res) => res.render("register"));
router.get("/forgot-password", (req, res) => res.render("forgot-password"));

// POST: login
router.post("/api/login", authController.login);

// POST: register
router.post("/api/register", authController.register); // optional if built

module.exports = router;
