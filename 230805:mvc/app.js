const express = require("express");
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/upload", express.static(__dirname + "/upload"));

const indexRouter = require("./routes"); // 자동으로 index.js  파일로 인식함
app.use("/", indexRouter);

// GET /
app.get("/", (req, res) => {
  res.render("index");
});

// 404
app.get("*", (req, res) => {
  res.render("404");
});

// server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
