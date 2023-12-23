const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8000;
const SECRET = "secretKey";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/login", (req, res) => {
  const { id } = req.body;
  const token = jwt.sign({ id }, SECRET); // key + value 같으면 생략 가능 + 시크릿값 설정

  // 토큰 값 콘솔에 출력
  console.log(token);
  // 토큰 값 포스트맨에 출력
  //   res.send({ result: true, token });
});

app.post("/verify", (req, res) => {
  console.log(req.headers.authorization);
  const auth = req.headers.authorization;
  const token = auth.split(" ");
  console.log(token);

  if (token[0] === "Bearer") {
    jwt.verify(token[1], SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .send({ result: false, message: "검증에 실패하였습니다" });
      }
      res.send({ result: true, user: decoded });
    });
  } else {
    res.send({ result: false, message: "올바른 인증 방식이 아닙니다" });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
