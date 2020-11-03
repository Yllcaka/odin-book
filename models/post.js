const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
  comments: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Comment" }],
  likes: { type: Number, default: 0 },
  date_posted: { type: Date, required: true, default: Date.now },
  images: [{ type: String, max: 4 }],
});

module.exports = mongoose.model("Post", postSchema);
