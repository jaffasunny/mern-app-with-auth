const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

const PORT = process.env.PORT | 5000;

dotenv.config();
// added our connection to db file
require("./db/conn");

// to make our app understand the data we're getting is json
app.use(express.json());

// linking router files
app.use(require("./routes/auth"));

// const User = require("./models/userSchema");

// Middleware
// so this checks if user is logged in
// then it redirects user to about page
// else it redirects user to register page

// app.get("/about", middleware, (req, res) => {
//   res.send("about");
// });

app.get("/contact", (req, res) => {
  // res.cookie("Test", "jaffer");
  res.send("contact");
});

// app.get("/login", (req, res) => {
//   res.send("login");
// });

// app.get("/register", (req, res) => {
//   res.send("signup");
// });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
