const express = require("express");
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
//view engine
app.set("view engine", "ejs");

//router
app.get("/", (req, res) => {
  res.render("index");
});
//get으로 정보 받기
app.get("/getPage", (req, res) => {
  res.render("get");
});
app.get("/resultGet", (req, res) => {
  //코드 실습
  // const { username, gender, birthYear, birthMonth, birthDay, hobby} = req.query;
  // res.render("result", { title: 'GET방식', userInfo:{username, gender, birthYear, birthMonth, birthDay, hobby}});
  // 으로 써도 됨
  // res.render 에서 color: {result:false , color: ''}, number:{result:false,number:''}
  res.render("result", { title: "GET방식", userInfo: req.query });
});
//post로 정보 받기
app.get("/postPage", (req, res) => {
  res.render("post");
});
app.post("/resultPost", (req, res) => {
  //코드 실습
  res.render("result", { title: "POST방식", userInfo: req.body });

  // color 와 number의 result 값을 true로 두면 됨
});

//서버오픈
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
