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

module.exports = router;
