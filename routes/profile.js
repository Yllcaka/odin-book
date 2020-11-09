const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { verifyToken, getTokenData } = require("../api/webToken");
const User = require("../models/user");

router.get("/", verifyToken, (req, res) => {
  return res.json(getTokenData(req.headers["authorization"]));
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    console.log(user);
    const { password, ...userData } = user;
    return res.json(user);
  } catch (err) {
    return res.status(404).send(err.message);
  }
});
router.post("/add/friend", verifyToken, async (req, res) => {
  const { newFriendId } = req.body;
  try {
    //Get the token data of the currently logged in user
    const currentUserData = getTokenData(req.headers["authorization"]);
    //Get the User and the new friend data from the database
    const newFriend = await User.findById(newFriendId);
    const currentUser = await User.findById(currentUserData._id).exec();
    if (currentUser.friends.includes(newFriendId)) {
      return res.json("Users already friends");
    } else {
      newFriend.friends.push(currentUser._id);
      currentUser.friends.push(newFriendId);
      await currentUser.save();
      await newFriend.save();
      return res.json({ currentUser, newFriend });
    }
  } catch (err) {
    next(err);
  }
});
module.exports = router;
