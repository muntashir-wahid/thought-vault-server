const express = require("express");

const {
  createCategory,
  getCategories,
  getCategory,
  // updateCategory,
} = require("./../controllers/categoryController");

const router = express.Router();

router.route("/").get(getCategories).post(createCategory);

router.route("/:id").get(getCategory);
//   .patch(protect, restrictTo("admin"), updateCategory);

module.exports = router;
