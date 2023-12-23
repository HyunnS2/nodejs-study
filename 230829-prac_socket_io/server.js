const http = require("http");
const express = require("express");
const SocketIO = require("socket.io");

const app = express();
const PORT = 8000;

// http 서버
const server = http.createServer(app);

// socket 서버
const io = SocketIO(server);

app.set("view engine", "ejs");

// 실습 1
app.get("/", (req, res) => {
  res.render("client");
});

// 채팅방 만들기
app.get("/chat", (req, res) => {
  res.render("chat");
});

///////////////////// socket //////////////////////////
io.on("connection", (socket) => {
  // 실습 1
  //   socket.on("hello", (data) => {
  //     console.log(`${data.name}:${data.message}`);
  //     socket.emit("cbHello", { name: "server", message: "안녕하세요" }, () => {});
  //   });
  //   socket.on("study", (data) => {
  //     console.log(`${data.name}:${data.message}`);
  //     socket.emit("cbStudy", { name: "server", message: "공부합시다" });
  //   });
  //   socket.on("bye", (data) => {
  //     console.log(`${data.name}:${data.message}`);
  //     socket.emit("cbStudy", { name: "server", message: "잘가~" });
  //   });

  ///////////////////////////////

  // 2번 채팅방 만들기
  console.log("id", socket.id);
  console.log("rooms", socket.rooms);

  socket.on("join", (chatroom) => {
    socket.join(chatroom);
    // socket.room에 chatroom 넣어두기
    socket.room = chatroom;
    // io.to(특정방).emit(이벤트) : 특정방에 전체 사용자에게 메시지 전달 ( = 나포함 )
    // broadcast 포함시 나를 제외한 전체 사용자에게 메시지 전달 ( = 나 불포함 )
    socket.broadcast.to(chatroom).emit("userjoin", chatroom);
  });

  socket.on("message", (message) => {
    // io.to(특정방).emit(이벤트) : 특정방에 전체 사용자에게 메시지 전달 ( = 나포함 )
    io.to(socket.room).emit("chat", `${message}`);
  });
});

///////////////////////////////////////////////////////
// server open
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
