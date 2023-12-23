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

app.get("/", (req, res) => {
  res.render("client");
});

///////////////////// socket //////////////////////////
io.on("connection", (socket) => {
  socket.on("new_message", (arg, cb) => {
    console.log(arg);
    cb(arg);
  });
});

///////////////////////////////////////////////////////
// server open
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
