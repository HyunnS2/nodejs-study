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

// 세부설정 방식으로 세팅해보기

const uploadDetail = multer({
  // storage : 저장할 공간에 대한 정보
  // diskStorage : 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
  storage: multer.diskStorage({
    destination(req, file, done) {
      // destination 괄호 안 done은 callback 이니까 이름 맘대로 해도 됨

      // 완료되면 "upload/"라느 폴더에 넣으라는 뜻 . null은 에러처리 하는 곳으로 생략함
      done(null, "upload/");
    },

    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
      //   console.log(ext);
    },
  }),

  // 파일의 용량 제한
  // 1MB = 1024 * 1024* 1 , 5MB = 1024 * 1024 * 5
  limits: { fileSize: 1024 * 1024 * 5 },
});

// router
app.get("/", (req, res) => {
  res.render("index");
});

// 싱글
// multer변수명.single('ejs파일 input의 name')
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
});

// 멀티 ver1
app.post("/upload/array", uploadDetail.array("userfiles"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
});

// 멀티 ver2
app.post(
  "/upload/fields",
  uploadDetail.fields([{ name: "userfile1" }, { name: "userfile2" }]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
  }
);

// 동적
app.post(
  "/dynamicFile",
  uploadDetail.single("dynamic-userfile"),
  (req, res) => {
    console.log(req.file);
    res.send(req.file);
  }
);

// server open
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
