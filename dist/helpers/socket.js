"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const signal_1 = require("./signal");
const auth_model_1 = require("../apiV1/auth/auth.model");
const chat_model_1 = require("../apiV1/chat/chat.model");
exports = module.exports = function socket(io) {
    io.on("connection", socketHandler);
};
function socketHandler(socket) {
    return __awaiter(this, void 0, void 0, function* () {
        socket.on("message", (_signal) => __awaiter(this, void 0, void 0, function* () {
            try {
                let signal = JSON.parse(_signal);
                if (signal.type === signal_1.SignalType.register) {
                    yield new auth_model_1.default().updateUserConnection({
                        token: signal.data.message,
                        connectionId: socket.id
                    });
                }
                else {
                    yield new chat_model_1.default().processMessage(signal.data, socket);
                }
            }
            catch (e) { }
        }));
        socket.on("disconnect", function () {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("disconnected", socket.id);
                yield new auth_model_1.default().removeUserConnection(socket.id);
            });
        });
        socket.on("reconnect", function () {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("Reconnected", socket.id);
            });
        });
        socket.on('connect', () => {
            console.log("connect", socket.id);
        });
        socket.on('connect_error', () => {
            console.log("connect_error", socket.id);
        });
        socket.on('connect_timeout', () => {
            console.log("connect_timeout", socket.id);
        });
        socket.on('error', () => {
            console.log("error", socket.id);
        });
        socket.on('reconnect_attempt', () => {
            console.log("reconnect_attempt", socket.id);
        });
        socket.on('reconnecting', () => {
            console.log("reconnecting", socket.id);
        });
        socket.on('reconnect_error', () => {
            console.log("reconnect_error", socket.id);
        });
        socket.on('reconnect_failed', () => {
            console.log("reconnect_failed", socket.id);
        });
        socket.on('ping', () => {
            console.log("ping", socket.id);
        });
        socket.on('ping', () => {
            console.log("ping", socket.id);
        });
    });
}
//# sourceMappingURL=socket.js.map