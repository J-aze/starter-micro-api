// https://leafletjs.com/examples/crs-simple/crs-simple.html

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const path = require("path");
const { Server } = require("socket.io");
const io = new Server(server);
const morgan = require("morgan");

const port = 3000;

app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/js", express.static(path.join(__dirname, "public/js")));
app.use("/img", express.static(path.join(__dirname, "public/img")));

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});

io.on("connect", (socket) => {
  // console.log("a user connected");
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
