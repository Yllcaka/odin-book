const express = require("express");
const router = express.Router();

const homeRouter = require("./home");
const profileRouter = require("./profile");
const loginRouter = require("./login");
const registerRouter = require("./register");
const user = require("../models/user");

router.use("/home", homeRouter);
router.use("/profile", profileRouter);
router.use("/login", loginRouter);
router.use("/register", registerRouter);
router.get("/users", (req, res) => {
  user.find({}).exec((err, doc) => res.json(doc));
});
router.get("/user/:id", (req, res) =>
  res.json({ working: "I think its working " + req.params.id })
);

module.exports = router;
