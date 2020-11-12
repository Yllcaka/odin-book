const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/userProfilePic");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });
const { verifyToken, getTokenData } = require("../api/webToken");
const User = require("../models/user");

router.get("/", verifyToken, (req, res) => {
  const tokenData = getTokenData(req.headers["authorization"]);
  return res.json(tokenData);
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select("-password")
      .populate("friends", "username profilePic");

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

router.post(
  "/new/profilePic",
  verifyToken,
  upload.single("profilePic"),
  async (req, res) => {
    try {
      console.log(req.file);
      const currentUserData = getTokenData(req.headers["authorization"]);
      const { _id: userId } = currentUserData;
      const currentUser = await User.findById(userId);
      const filePath = req.file.path;
      console.log(filePath);
      currentUser.profilePic = filePath.substr(filePath.indexOf("\\"));
      console.log(currentUser.profilePic);
      currentUser.save();
      res.send("It ended");
    } catch {
      return res.status(404).send("Image not uploading");
    }
  }
);
