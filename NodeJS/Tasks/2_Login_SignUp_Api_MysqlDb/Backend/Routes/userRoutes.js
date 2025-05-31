const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { signup, login, dashboard,logout } = require("../controllers/userController");

const upload = require("../middlewares/uploadMiddleware");

router.post("/signup", upload.single("userPhoto"), signup);
router.post("/login", login);
router.get("/dashboard", authMiddleware, dashboard);
router.get("/logout", authMiddleware, logout);

module.exports = router;
