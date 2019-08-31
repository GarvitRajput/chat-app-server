import { IncomingSignal, SignalType } from "./signal";
import Authentication from "../apiV1/auth/auth.model";
import Chat from "../apiV1/chat/chat.model";

exports = module.exports = function socket(io) {
  io.on("connection", socketHandler);
};

function socketHandler(socket) {
  console.log(socket.id + " user connected");
  socket.on("message", async _signal => {
    try {
      let signal: IncomingSignal = JSON.parse(_signal);
      if (signal.type === SignalType.register) {
        await new Authentication().updateUserConnection({
          token: signal.data.message,
          connectionId: socket.id
        });
      } else {
        await new Chat().processMessage(signal.data, socket);
      }
    } catch (e) {}
  });
  socket.on("disconnect", async function() {
    await new Authentication().removeUserConnection(socket.id);
  });
  socket.on("reconnect", function() {
    console.log(socket.id + " reconnected");
  });
}
