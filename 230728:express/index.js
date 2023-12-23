// 관례 상 모듈 이름 = 변수 이름
// 과거형 문법
const express = require("express");

// 이거는 최근의 문법 ( 단, 패키지에 type : module 추가해주어야 함 )
// import express from "express";

// 변수에 express 담기
const app = express();

const PORT = 8000;

// ejs 불러오기
// view 엔진 세팅
app.set("view engine", "ejs");
app.set("views", "./views");
// 폴더 경로
// app.use("views", express.static(__dirname + "/views"));

// 정적인 파일 불러오기
// app.use("public", express.static("./public"));

app.use("../public", express.static(join(__dirname + "/public/green.png")));

// url 과 callback 함수 담기 ( 항상 req , res 순서 유의. 이름을 바꿔도 항상 이 순서로 담김 )
// 콜백함수 사용시 꼭 요청과 응답 포함 ! 순서도 늘 요청->응답 임. req->res 순
// post 방식으로 가져오는 애들은 app.post로 해주어야 함
// url 형식 맞추기. "/app" 으로 해주면 주소창 진입시 localhost:8000/app 으로 도메인 적어야 페이지가 열림
app.get("/", (req, res) => {
  // send() :  클라이언트에 응답 데이터를 보낼 때 쓰는 것
  // 메시지 보내보기
  //   res.send("Hello express");
  // 객체 보내보기 ( 객체 안에 객체 data:{}넣을 수 있음. )
  //   res.send({
  //     result: true,
  //     code: 1000,
  //     message: "회원가입에 성공하였습니다",
  //     data: { name: " hyun" },
  //   });

  // render() : 뷰 엔진 렌더링
  //   res.render("test", { data: "hyun" });

  res.render("practice");
});

// listen 은 server를 열어주는 역할
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

console.log(express);
