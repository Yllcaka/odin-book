const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const user = require("../models/user");

router.get("/", (req, res) => res.json({ message: "Register" }));

router.post("/", async (req, res, next) => {
  var stuff = {};
  await user.findOne({ email: req.body.email }).exec((err, user) => {
    if (user) {
      console.log(user);
      return res.json({ message: "We found him" });
    } else {
      bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
        if (err) next(err);
        stuff = { ...req.body, password: hashedPass };
        console.log(stuff);
        const user = new User(stuff);
        user.save((err) => (err ? next(err) : null));
        res.json(stuff);
      });
    }
  });
});

router.get("/users", (req, res) =>
  User.find({}).exec((err, users) => res.json(users))
);

module.exports = router;
