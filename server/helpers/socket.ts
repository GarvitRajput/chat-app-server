import { IncomingSignal, SignalType } from "./signal";
import Authentication from "../apiV1/auth/auth.model";
import Chat from "../apiV1/chat/chat.model";
import * as cookie from "cookie";
let io;

exports = module.exports = function socket(_io) {
  io = _io;
  io.on("connection", socketHandler);
  io.on("connect", (d) => {
    updateUserConnection(io, d);
  });
};

async function updateUserConnection(io, socket) {
  let token = cookie.parse(socket.handshake.headers.cookie).token;
  await new Authentication().updateUserConnection(
    {
      token: token,
      connectionId: socket.id,
      io,
    },
    io
  );
}

async function socketHandler(socket) {
  socket.on("message", async (_signal) => {
    try {
      let signal: IncomingSignal = JSON.parse(_signal);
      console.log(signal.type, socket.id);
      if (signal.type === SignalType.register) {
        await new Authentication().updateUserConnection(
          {
            token: signal.data.message,
            connectionId: socket.id,
            io,
          },
          io
        );
      } else {
        await new Chat().processMessage(signal, socket, io);
      }
    } catch (e) {}
  });
  socket.on("disconnect", async function () {
    console.log("disconnected", socket.id);
    await new Authentication().removeUserConnection(socket.id, io);
  });
  socket.on("logout", async function () {
    console.log("disconnected", socket.id);
    await new Authentication().removeUserConnection(socket.id, io);
  });
  socket.on("reconnect", async function () {
    console.log("Reconnected", socket.id);
  });
  socket.on("connect", () => {
    console.log("connect", socket.id);
  });
  socket.on("connect_error", () => {
    console.log("connect_error", socket.id);
  });
  socket.on("connect_timeout", () => {
    console.log("connect_timeout", socket.id);
  });
  socket.on("error", () => {
    console.log("error", socket.id);
  });
  socket.on("reconnect_attempt", () => {
    console.log("reconnect_attempt", socket.id);
  });
  socket.on("reconnecting", () => {
    console.log("reconnecting", socket.id);
  });
  socket.on("reconnect_error", () => {
    console.log("reconnect_error", socket.id);
  });
  socket.on("reconnect_failed", () => {
    console.log("reconnect_failed", socket.id);
  });
  socket.on("ping", () => {
    console.log("ping", socket.id);
  });
  socket.on("ping", () => {
    console.log("ping", socket.id);
  });
}
