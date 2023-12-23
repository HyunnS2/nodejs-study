const express = require("express");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("practice4");
});

app.get("/practice", (req, res) => {
  res.render("practice");
});

app.get("/practice2", (req, res) => {
  res.render("practice2");
});

app.get("/practice3", (req, res) => {
  res.render("practice3");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
