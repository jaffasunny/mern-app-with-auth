const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("Hello from server routerjs");
});

// This was made using old Promise approach

// router.post("/register", (req, res) => {
//   // getting data from user req.body
//   const { name, email, phone, work, password, cpassword } = req.body;

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "Please fill all fields properly" });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({
//           error:
//             "User is already registered, please login with your proper credentials!",
//         });
//       }

//       const newUser = new User({
//         name,
//         email,
//         phone,
//         work,
//         password,
//         cpassword,
//       });

//       newUser
//         .save()
//         .then(() => {
//           res.status(201).json({ message: "User is registered successfully!" });
//         })
//         .catch((err) => {
//           res.status(500).json({ error: `Failed to register ${err.message}` });
//         });
//     })
//     .catch((error) => console.log(error.message));
// });

// This is made using async await approach
router.post("/register", async (req, res) => {
  // getting data from user req.body
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all fields properly" });
  }

  // This returns promise
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({
        error:
          "User is already registered, please login with your proper credentials!",
      });
    } else if (password != cpassword) {
      return res.status(422).json({
        error: "Pasword are not matching",
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

    await newUser.save();

    res.status(201).json({ message: "User is registered successfully!" });
  } catch (err) {
    res.send({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    res.status(422).send({ error: "Please fill all fields properly!" });
  } else if (!email || !password) {
    res.status(400).send({ error: "Please fill all details!" });
  }

  try {
    const user = await User.findOne({ email: email, password: password });
    if (user) {
      return res.json({ message: "You are logged in successfully" });
    } else {
      return res.json({ error: "User not found" });
    }
  } catch (err) {
    console.log({ error: err });
  }
});

module.exports = router;
