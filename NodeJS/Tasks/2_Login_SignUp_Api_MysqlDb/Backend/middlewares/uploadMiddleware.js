// middlewares/uploadMiddleware.js
const multer = require("multer");

const storage = multer.memoryStorage(); // Keep file in memory as buffer
const upload = multer({ storage:storage });

module.exports = upload;
