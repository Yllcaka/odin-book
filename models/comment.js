const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
  post: { type: mongoose.SchemaTypes.ObjectId, ref: "Post", required: true },
  content: { type: String, required: true },
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model("Comment", commentSchema);
