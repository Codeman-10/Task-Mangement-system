const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const errorMessages = require("../utils/errorMessages");

async function signIn(email, password) {
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error(errorMessages.AUTH.INVALID_EMAIL_OR_PASSWORD);

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      throw new Error(errorMessages.AUTH.INVALID_EMAIL_OR_PASSWORD);
    return user;
  } catch (error) {
    console.log(error)
    throw new Error(errorMessages.GENERAL.SERVER_ERROR);
  }
}

async function signUp(name, email, password) {
  const user = await User.findOne({ email });
  if (user) throw new Error(errorMessages.USER.EMAIL_ALREADY_EXISTS);

  const newUser = await User.create({ name, email, password });
  return newUser;
}

module.exports = {
  signIn,
  signUp,
};
