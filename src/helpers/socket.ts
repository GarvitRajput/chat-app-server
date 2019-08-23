exports = module.exports = function socket(io) {
  io.on("connection", socketHandler);
};

function socketHandler(socket) {
  console.log(socket.id + " user connected");
  socket.on("message", data => {
    console.log(data);
  });
  socket.on('disconnect', function () {
    console.log(socket.id+' disconnected');
 });
 socket.on('reconnect', function () {
   console.log(socket.id+' reconnected');
});
}
