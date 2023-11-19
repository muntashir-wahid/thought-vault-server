const Blog = require("./../models/blogModel");

exports.createBlog = async (req, res) => {
  const newBlog = await Blog.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      blog: newBlog,
    },
  });
};

exports.getBlogs = async (req, res) => {
  const blogs = await Blog.find({});

  res.status(200).json({
    status: "success",
    data: {
      blogs,
    },
  });
};

exports.getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      blog,
    },
  });
};

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
