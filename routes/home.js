const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { verifyToken, getTokenData } = require("../api/webToken");
const User = require("../models/user");
const Post = require("../models/post");

//Home
router.get("/", verifyToken, async (req, res) => {
  try {
    let currentUserData = getTokenData(req.headers["authorization"]);
    const currentUser = await User.findById(currentUserData._id)
      .populate("friends")
      .exec();

    const postsOfUserFriends = currentUser.friends.reduce(
      (allPosts, nextFriends) => {
        let newPosts = nextFriends.posts;
        return [...allPosts, ...newPosts];
      },
      []
    );
    const postSortedByDate = await Post.find()
      .where("_id")
      .in(postsOfUserFriends)
      .populate("author", "username")
      .sort({ date_posted: "descending" })
      .exec();
    return res.json(postSortedByDate);
  } catch (err) {
    return res.status(403).send("There was an error");
  }
});

//New Post
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
    const newPost = new Post(postContent);
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
