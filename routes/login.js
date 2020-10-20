const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

router.get("/", (req, res) => res.json({ message: "Login" }));

router.post("/", async (req, res, next) => {
  const { username, password, email } = req.body;
  const user = User.findOne({ email }).exec((err, user) => {
    if (!user) return res.json("User not found");

    bcrypt.compare(password, user.password, (err, result) => {
      if (err) next(err);
      if (result) {
        jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, (err, token) =>
          res.json({ token })
        );
      } else {
        res.json("Password Incorrect");
      }
    });
  });

  // return res.json("User not Found");
});

module.exports = router;
