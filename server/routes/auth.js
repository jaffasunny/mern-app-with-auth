const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/conn");
const User = require("../models/userSchema");
const authenticate = require("../middleware/authenticate");

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
        error: "Pasword are not matching ",
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
    const user = await User.findOne({ email: email });

    if (user) {
      // bcrypt.compare(user_written, from_database)
      const isMatch = await bcrypt.compare(password, user.password);

      // Generate jason web token
      const token = await user.generateAuthToken();

      // saving our token as cookie
      res.cookie("jwtoken", token, {
        // expires toen in 30 days
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        return res.status(400).json({ error: "Invalid Credentials" });
      } else {
        return res.json({ message: "You are logged in successfully" });
      }
    } else {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (err) {
    console.log({ error: err });
  }
});

// about us page
router.get("/about", authenticate, (req, res) => {
  console.log("Hello from About Page");
  res.send(req.rootUser);
});

// Logout  page
router.get("/logout", (req, res) => {
  console.log("Logout Page");

  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("User Logout");
});

// get user data from contactus and homepage
router.get("/getdata", authenticate, (req, res) => {
  console.log("Getting all data");
  res.send(req.rootUser);
});

// Contactus page
router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    console.log(req.body);
    if (!name || !email || !phone || !message) {
      console.log("error in contact form");
      return res.json({ error: "Please Fill the contact form" });
    }

    const userContact = await User.findOne({ _id: req.userID });

    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );

      await userContact.save();

      res.status(201).json({ message: "user contact successful" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
