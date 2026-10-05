// Step -1 import mongooose module
const mongoose = require("mongoose");
require("dotenv").config();
// step -2 build connection with DB
const connection = mongoose.connect(
  "mongodb+srv://virat:virat@cluster0.7klbcnn.mongodb.net/user",
);

// step -3 build Schema/structure
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  Password: String,
});

// step -4 Create userModel for creating Document
const userModel = mongoose.model("user", userSchema);

// step - 5 Exports module that uses in server
module.exports = { connection, userModel };
