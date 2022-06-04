const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
  date: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
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
      message: {
        type: "String",
        required: true,
      },
    },
  ],
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

// we are hashing the password
// we use normal function because of this keyword
userSchema.pre("save", async function (next) {
  // This only works when password changes
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

// generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    // we pass our unique id as payload
    // we pass secret key as second arg
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    // adding token to our user object
    this.tokens = this.tokens.concat({ token: token });
    await this.save();

    return token;
  } catch (error) {
    console.log({ error });
  }
};

// store messages
userSchema.methods.addMessage = async function (name, email, phone, message) {
  try {
    this.messages = this.messages.concat({ name, email, phone, message });
    await this.save();

    return this.messages;
  } catch (error) {
    console.log({ error });
  }
};

// After defining user schema
// create a user model
// and add collection user schema
const User = mongoose.model("User", userSchema);

module.exports = User;
