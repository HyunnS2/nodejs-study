const express = require("express");
const multer = require("multer");
// 경로를 가져올 때
const path = require("path");

const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// 정적 파일 설정
app.use("/upload", express.static(__dirname + "/upload"));

// multer setting
const upload = multer({
  // dest: 폴더명
  // dest = 업로드 할 파일을 저장할 경로를 지정
  dest: "upload/",
});
