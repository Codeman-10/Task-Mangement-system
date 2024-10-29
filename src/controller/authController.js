const authService = require("../service/authService");
const { body, validationResult } = require("express-validator");
const { generateToken } = require("../utils/common");

const handleSignIn = [
  body("email").isEmail().withMessage("Invalid email address."),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(402).json({ errors: errors.array() });
    }
    try {
      const { password, email } = req.body;
      const user = await authService.signIn(email, password);

      res.cookie("token", generateToken(user), {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
      });
      res.status(200).json({
        message: "Successfully signed in",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
        console.log(error)
      res.status(400).json({ message: error.message + new Date() });
    }
  },
];

const handleSignUp = [
  body("name").notEmpty().withMessage("Name is required."),
  body("email").isEmail().withMessage("Invalid email address."),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long."),

  async (req, res) => {
    const errors = validationResult(req);
    console.log(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, password, email } = req.body;

      const user = await authService.signUp(name, email, password);
      res.status(201).json(user);
    } catch (error) {
      console.error("Sign-up error:", error);
      res.status(500).json({
        message:
          error.message || "Internal server error. Please try again later.",
      });
    }
  },
];

const handleSignOut = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });
  res.status(200).json({ message: "bye" });
};
module.exports = { handleSignIn, handleSignUp, handleSignOut };
