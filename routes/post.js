const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { verifyToken, getTokenData } = require("../api/webToken");
const User = require("../models/user");
const Post = require("../models/post");

//New Post
router.post("/new", verifyToken, async (req, res) => {
  let currentUserData = getTokenData(req.headers["authorization"]);
  console.log(req.body);
  const { title, content } = req.body;

  try {
    const currentUser = await User.findById(currentUserData._id).exec();

    let postContent = {
      author: currentUser._id,
      title,
      content,
    };
    const newPost = new Post(postContent);

    currentUser.posts.push(newPost._id);
    newPost.save();
    currentUser.save();
    res.json(currentUser);
  } catch {
    res.status(401).send("Bad Request");
  }
});

//Like Post
router.post("/update", verifyToken, async (req, res) => {
  console.log("IS it happening");
  try {
    //Get the user id
    let currentUserData = getTokenData(req.headers["authorization"]);
    let userId = currentUserData._id;
    //Get the id of the post
    let { postId } = req.body;
    let returnData;
    const updatedPost = await Post.findById(postId);
    //If the user already Liked the post unlike the post else like the post
    if (updatedPost.likes.includes(userId)) {
      updatedPost.likes = updatedPost.likes.filter(
        (user) => user._id != userId
      );
      returnData = "Removed Like";
    } else {
      updatedPost.likes.push(userId);
      returnData = "Added Like";
    }
    updatedPost.save();
    res.send(returnData);
  } catch (err) {
    return res.status(403).send("There was an error");
  }
});

module.exports = router;
