const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, "A blog must have a title"],
    },
    author: {
      type: String,
      trim: true,
      required: [true, "A blog must have a title"],
    },
    category: {
      // type: mongoose.SchemaTypes.ObjectId,
      // ref: "Category",
      type: String,
      required: [true, "A product must have a valid category id"],
    },
    details: {
      type: String,
      trim: true,
      required: [true, "A blog must have a title"],
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    toObject: {
      virtuals: true,
      getters: true,
    },
  }
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
