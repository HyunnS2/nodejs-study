const express = require("express");
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//view engine
app.set("view engine", "ejs");
app.set("views", "./views");

//router
app.get("/", (req, res) => {
  res.render("index");
});
//get으로 정보 받기
app.get("/getPage", (req, res) => {
  res.render("get");
});
app.get("/resultGet", (req, res) => {
  console.log(req.query);
  res.render("result", { title: "Get방식", userInfo: req.query });
  //userInfo:  {
  //     username: '',
  //     birthYear: '111'
  // }
});

//post로 정보 받기
app.get("/postPage", (req, res) => {
  res.render("post");
});
app.post("/resultPost", (req, res) => {
  res.render("result", { title: "POST방식", userInfo: req.body });
});

//서버오픈
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
