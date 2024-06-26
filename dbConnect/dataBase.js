require("dotenv").config();

const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connected  successfully.");
  } catch (error) {
    console.error(error);
  }
};
module.exports = connectDB;