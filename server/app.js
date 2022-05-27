const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
dotenv.config();

const DB = process.env.MONGO_URI;

mongoose
  .connect(DB)
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((error) => {
    console.log(`connection failed ${error.message}`);
  });

// Middleware
// so this checks if user is logged in
// then it redirects user to about page
// else it redirects user to register page
const middleware = (req, res, next) => {
  console.log(`Hello my Middleware`);
  next();
};

const app = express();

const PORT = process.env.PORT | 5000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/about", middleware, (req, res) => {
  res.send("about");
});

app.get("/contact", (req, res) => {
  res.send("contact");
});

app.get("/register", (req, res) => {
  res.send("register");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
