const express = require("express");

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("practice3");

  //   res.render("practice3", { data: 2 });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
