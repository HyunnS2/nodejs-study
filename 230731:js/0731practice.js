const express = require("express");
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// router
app.get("/", (req, res) => {
  res.render("0731practice", { title: "실습" });
});

// get으로 정보 받기
app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("0731practiceresult", {
    title: "GET 요청 폼 결과 확인하기",
    userInfo: req.query,
  });
});

// post로 정보 받기
app.post("/postForm", (req, res) => {
  console.log(req.body);
  const { name, gender, year, month, day, hobby, favColor, favNumber } =
    req.body;
  res.render("0731practiceresult", {
    title: "POST 요청 폼 결과 확인하기",
    userInfo: { name, gender, year, month, day, hobby },
    favColor, // favColor 변수 전달
    favNumber, // favNumber 변수 전달
  });
});

// function submitGender() {
//   var selectedGender = $('input[name="gender"]:checked').val();
//   $.post("/0731practiceresult", { gender: selectedGender });
// }

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
