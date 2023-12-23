const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

// 뷰 엔진
app.set("view engine", "ejs");
app.set("views", "./views");

// 쿠키 설정
// 일반 쿠키
// app.use(cookieParser());

// 암호화 쿠키 ( 암호화 값을 abcdef 로 가정 )
app.use(cookieParser("abcdef"));

// cookie 옵션 객체
const cookieConfig = {
  // httpOnly : 웹서버를 통해서만 쿠키에 접근 가능 ( 자바스크립트에서 document.cookie를 이용해서 쿠키에 접속하는 것을 차단 )
  // maxAge: 쿠키의 수명 ( 밀리초 단위 )
  // expires: 만료 날짜를 GMT 시간 설정
  // path: 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고 웹 브라우저는 해당하는 쿠키만 웹 서버에 전송 ( 쿠키가 전송 될 URL 특정 가능 , (기본값: '/') )
  // domain : 쿠키가 전송 될 도메인을 특정 가능 ( 기본값: 현재도메인 )
  // secure : 웹브라우저와 웹서버가 https 로 통신하는 경우만 쿠키를 서버에 전송
  // signed : 쿠키의 암호화 결정 ( req.signedCookies 객체에 들어있음 )

  httpOnly: true,
  maxAge: 60 * 1000, // 1분

  // 암호화 쿠키 사용
  signed: true,
};

// GET /
app.get("/", (req, res) => {
  res.render("index");
});

// 쿠키 설정하기
app.get("/setCookie", (req, res) => {
  // 쿠키 이름 , 쿠키 값, 옵션 객체
  res.cookie("myCookie", "myValue", cookieConfig);
  // 페이지 오픈용 ( 안쓰면 로딩만 돌기 때문. )
  res.send("/set cookie");
});

// 쿠키 확인하기
app.get("/getCookie", (req, res) => {
  // 일반 쿠키
  //   res.send(req.cookies);
  // 암호화 쿠키
  res.send(req.signedCookies);
});

// 쿠키 제거하기
app.get("/clearCookie", (req, res) => {
  // setCookie의 옵션 객체와 똑같아야 함 . 만료시간은 달라도 됨
  res.clearCookie("myCookie", "myValue", cookieConfig);
  res.send("clear cookie");
});

// server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
