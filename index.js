const PORT = process.env.PORT || 1212;
const EXPRESS = require("express");
const APP = EXPRESS();

const HTTP = require("http");
const SERVER = HTTP.Server(APP);

APP.use(EXPRESS.static("client"));

SERVER.listen(PORT, function() {
  console.log("App running!");
});

const IO = require("socket.io")(SERVER);

IO.on("connection", function(socket) {
  socket.on("message", function(message) {
    IO.emit("message", message);
  });
});
