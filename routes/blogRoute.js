const express = require("express");

const {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
} = require("./../controllers/blogController");

const router = express.Router();

router.route("/").get(getBlogs).post(createBlog);
router.route("/:id").get(getBlog).patch(updateBlog).delete(deleteBlog);

module.exports = router;
