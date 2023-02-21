// https://leafletjs.com/examples/crs-simple/crs-simple.html

const express = require("express");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = 3000;

app.get("/", (req, res) => {
  res.send("hello");
});

io.on("connect", (socket) => {
  // console.log("a user connected");
  io.emit("hello", "welcome");
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
    // socket.broadcast.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => {
  console.log(`listening on ${port}`);
});
