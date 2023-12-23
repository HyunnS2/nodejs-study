const express = require("express");
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// router : 주소를 불러오는 것
app.get("/", (req, res) => {
  //   res.send("Hello");
  res.render("0731index", { title: "폼 실습" });
});

// 항상 콘솔 찍으면서 데이터가 명확하게 잘 들어오는지 확인하는 습관 들이는 것이 좋음
app.get("/getForm", (req, res) => {
  console.log(req.query);
  res.render("0731result", {
    title: "GET 요청 폼 결과 확인하기",
    userInfo: req.query,
    // userInfo : {id:'',pw:''}
  });
});

app.post("/postForm", (req, res) => {
  console.log(req.body);
  res.render("0731result", {
    title: "POST 요청 폼 결과 확인하기",
    userInfo: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
