const express = require("express");
const morgan = require("morgan");

const blogRouter = require("./routes/blogRoute");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/blogs", blogRouter);

module.exports = app;
