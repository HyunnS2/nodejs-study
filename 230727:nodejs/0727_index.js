// 1번의 모듈 불러오기

// const mod = require("./0727_module.js");

// console.log(mod);

// 특정 객체에 접근할 때는 .객체 로 한다
// console.log(mod.a);

// 2.

// console.log(mod);

// 3. 객체 구조 분해 할당 : 객체 형태로 불러오기

// const { a, b } = require("./0727_module.js");
// console.log(a, b, mod.age);

// or

// const { mod } = require("./0727_module.js");
// console.log(age);

//
// 서버 만들기

// 변수명과 '' 안 이름을 같게 하는 것이 관례임
const http = require("http");

// 파일 시스템 가져오기
const fs = require("fs");

// 요청 = createServer, 응답 그 안에 있는 화살표 함수
const server = http.createServer((request, response) => {
  // 응답헤더 = writeHead
  //   response.writeHead(200);
  //   response.write("<h1>Hello world<h1>");
  //   response.end("<p>End<p>");

  // 파일 전송 해보기

  try {
    const data = fs.readFileSync("./index_0727.html");
    response.writeHead(200);
    response.end(data);
  } catch (error) {
    console.log(error);
    response.writeHead(404);
    response.end(error.message);
  }
});

// 포트 번호 넣기 + 콜백함수 넣기
server.listen(8000, function () {
  console.log("localhost:8000 포트 실행");
});
