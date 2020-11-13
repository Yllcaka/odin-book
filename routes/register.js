const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");

router.get("/", (req, res) => res.json({ message: "Register" }));

router.post("/", async (req, res, next) => {
  try {
    const userExists = await User.exists({ email: req.body.email });
    if (userExists) {
      return res.json({ message: "This user already Exists" }).status(404);
    } else {
      bcrypt.hash(req.body.password, 10, (err, hashedPass) => {
        if (err) next(err);
        const data = { ...req.body, password: hashedPass };
        const user = new User(data);
        user.save((err) => (err ? next(err) : null));
        res.json(data);
      });
    }
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
