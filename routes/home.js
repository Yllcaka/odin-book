const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { verifyToken, getTokenData } = require("../api/webToken");
const User = require("../models/user");
const Post = require("../models/post");
router.get("/", verifyToken, (req, res) => {
  jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET, (err, authData) => {
    if (err) return res.sendStatus(403);

    return res.json(authData);
  });
});
router.post("/new/post", verifyToken, async (req, res) => {
  let currentUserData = getTokenData(req.headers["authorization"]);

  const { title, content } = req.body;

  try {
    const currentUser = await User.findById(currentUserData._id).exec();
    console.log(currentUser);
    let postContent = {
      author: currentUser._id,
      title,
      content,
    };
    const newPost = await new Post(postContent);
    // currentUser.posts = [];
    currentUser.posts.push(newPost._id);
    newPost.save();
    currentUser.save();
    res.json(currentUser);
  } catch {
    res.status(401).send("Bad Request");
  }
});

module.exports = router;
