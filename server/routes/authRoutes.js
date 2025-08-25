const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

router.post("/register", register); // ⚠️ Only use this once to create first admin
router.post("/login", login);

module.exports = router;
