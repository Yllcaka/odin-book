const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../api/webToken");
const user = require("../models/user");
router.get("/", verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
    if (err) return res.sendStatus(403);
    const { user } = authData;
    // console.log(user);
    return res.json(authData);
  });
});

module.exports = router;
