const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("Hello from server routerjs");
});

router.post("/register", (req, res) => {
  // getting data from user req.body
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all fields properly" });
  }

  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({
          error:
            "User is already registered, please login with your proper credentials!",
        });
      }

      const newUser = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });

      newUser
        .save()
        .then(() => {
          res.status(201).json({ message: "User is registered successfully!" });
        })
        .catch((err) => {
          res.status(500).json({ error: `Failed to register ${err.message}` });
        });
    })
    .catch((error) => console.log(error.message));
});

module.exports = router;
