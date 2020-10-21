const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchmema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  password: { type: String, required: true },
  profilePic: { type: String },
  friends: { type: mongoose.SchemaTypes.ObjectId, ref: "User" },
  chats: { type: mongoose.SchemaTypes.ObjectId, ref: "Message" },
  posts: { type: mongoose.SchemaTypes.ObjectId, ref: "Post" },
});

module.exports = mongoose.model("User", userSchmema);
