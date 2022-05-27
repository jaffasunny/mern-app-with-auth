const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
  cpassword: {
    type: "String",
    required: true,
  },
});

// After defining user schema
// create a user model
// and add collection user schema
const User = mongoose.model("User", userSchema);

module.exports = User;
