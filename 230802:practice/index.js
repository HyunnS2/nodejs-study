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

// router
app.get("/", (req, res) => {
  res.render("index");
});

const uploadDetail = multer({
  // storage : 저장할 공간에 대한 정보
  // diskStorage : 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
  storage: multer.diskStorage({
    destination(req, file, done) {
      // destination 괄호 안 done은 callback 이니까 이름 맘대로 해도 됨

      done(null, "upload/");
    },

    filename(req, file, done) {
      console.log("filename: ", req.body);
      const ext = path.extname(file.originalname);

      done(null, req.body.userId + Date.now() + ext);
      // done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      //   console.log(ext);
    },
  }),

  // 파일의 용량 제한
  // 1MB = 1024 * 1024* 1 , 5MB = 1024 * 1024 * 5
  limits: { fileSize: 1024 * 1024 * 5 },
});

app.post("/result", uploadDetail.single("profile"), (req, res) => {
  console.log(req.file);
  res.render("result", {
    userInfo: req.body,
    profile: req.file.path,
  });
});

// 동적
app.post("/dynamicFile", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  res.send(req.file);
});

// server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
