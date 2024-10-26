const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("connceted to db");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = connectDb;
