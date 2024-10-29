const jwt = require("jsonwebtoken");
const errorMessages = require("../utils/errorMessages");
const config = require("../config/config");

const handleToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ message: errorMessages.GENERAL.UNAUTHENTICATED });
  }

  jwt.verify(token, config.jwtSecret, (err, data) => {
    if (err) {
      return res
        .status(403)
        .json({ message: errorMessages.GENERAL.UNAUTHORIZED });
    }
    req.user = data;
    next();
  });
};

module.exports = handleToken;
