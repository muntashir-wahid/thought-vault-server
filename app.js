const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const blogRouter = require("./routes/blogRoute");
const categoryRouter = require("./routes/categoryRoute");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/categories", categoryRouter);

module.exports = app;
