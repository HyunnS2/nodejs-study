const express = require("express");
const app = express();
const PORT = 8000;

let hash = " ";

//ejs
app.set("view engine", "ejs");
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//router
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/hash", (req, res) => {
  // 밑에 있는 함수 실행
  const { pw } = req.body;

  hash = bcryptPassword(pw);
  res.json({ hash });
});

app.post("/verify", (req, res) => {
  const { pw } = req.body;
  //   const compare = verifyPassword(pw, salt, hash);
  const compare = comparePassword(pw, hash);
  res.json({ compare });
});

//server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const crypto = require("crypto");

// function
const creatHashedPassword = (password) => {
  // createHash(알고리즘).update(암호화할값).digest(인코딩방식)
  return crypto.createHash("sha512").update(password).digest("base64");
};

const salt = crypto.randomBytes(16).toString("base64"); // salt 생성
const iterations = 100; // 반복 횟수
const keylen = 64; // 생성할 키의 길이
const digest = "sha512"; // hash 알고리즘

const bcrypt = require("bcrypt");
const saltNumber = 10;

// 암호화
const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, saltNumber);
};

// 비교
const comparePassword = (password, dbPasswod) => {
  return bcrypt.compareSync(password, dbPasswod);
};
