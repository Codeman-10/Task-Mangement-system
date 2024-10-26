const config = require("../config/config");
const jwt = require("jsonwebtoken");
exports.generateToken = (user) => {
  return jwt.sign({ id: user.id, username: user.email }, config.jwtSecret, {
    expiresIn: "1h",
  });
};
