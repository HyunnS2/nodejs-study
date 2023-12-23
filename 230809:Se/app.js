const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router 분리
app.get("/", (req, res) => {
  res.render("index");
});
const router = require("./routes");
app.use("/visitor", router);

//오류처리
app.use("*", (req, res) => {
  res.render("404");
});

// force 값이 false면 없으면 생성 , true면 항상 생성
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
