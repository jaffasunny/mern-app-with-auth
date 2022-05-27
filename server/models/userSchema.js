const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

// we are hashing the password
// we use normal function because of this keyword
userSchema.pre("save", async function (next) {
  console.log("hello im pre save function");
  // This only works when password changes
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

// After defining user schema
// create a user model
// and add collection user schema
const User = mongoose.model("User", userSchema);

module.exports = User;
