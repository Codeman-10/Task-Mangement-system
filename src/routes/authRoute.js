const express = require("express");
const authController = require("../controller/authController");
const router = express.Router();

router.post("/signUp", authController.handleSignUp);
router.post("/signIn", authController.handleSignIn);
router.get("/signOut", authController.handleSignOut);

module.exports = router