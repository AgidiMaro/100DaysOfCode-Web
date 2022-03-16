// this is the schema for the signup
const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("signUpTable", signUpTemplate);
