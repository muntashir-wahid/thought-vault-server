const Category = require("./../models/categoryModel");

exports.createCategory = async (req, res) => {
  const category = await Category.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      blog: category,
    },
  });
};

exports.getCategories = async (req, res) => {
  const categories = await Category.find({});

  res.status(200).json({
    status: "success",
    data: {
      categories,
    },
  });
};

exports.getCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      category,
    },
  });
};

/*
exports.updateBlog = async (req, res) => {
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    status: "success",
    data: {
      blog: updatedBlog,
    },
  });
};

exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
};
*/
