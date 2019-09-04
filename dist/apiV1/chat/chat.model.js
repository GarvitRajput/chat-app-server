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
const db_1 = require("../../config/db");
const group_model_1 = require("../group/group.model");
const signal_1 = require("../../helpers/signal");
const auth_model_1 = require("../auth/auth.model");
var cookie = require("cookie");
class Chat {
    getAvailableChats(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let chat = [];
            let data = yield db_1.default("users")
                .whereIn("userId", function () {
                this.select("senderId")
                    .where("isGroupChat", "=", "0")
                    .where("receiverId", "=", id)
                    .from("messages");
            })
                .orWhereIn("userId", function () {
                this.select("receiverId")
                    .where("isGroupChat", "=", "0")
                    .where("senderId", "=", id)
                    .from("messages");
            })
                .groupBy("userId")
                .select(["userId"]);
            data.forEach(user => {
                if (user.userId != id)
                    chat.push({
                        userId: user.userId,
                        IsGroup: 0
                    });
            });
            data = [];
            data = yield db_1.default("groups")
                .whereIn("groupId", function () {
                this.select("receiverId")
                    .where("isGroupChat", "=", "1")
                    .from("messages");
            })
                .whereIn("groupId", function () {
                this.select("groupId")
                    .where("memberId", "=", id)
                    .from("groupMembers");
            })
                .select(["groupId"]);
            data.forEach((id) => __awaiter(this, void 0, void 0, function* () {
                let groupInfo = yield new group_model_1.default().getGroupInfo(id);
                groupInfo.IsGroup = 1;
                chat.push(groupInfo);
            }));
            return chat;
        });
    }
    getChat(id, isGroup, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (isGroup) {
                return yield db_1.default("messages")
                    .where("receiverId", "=", id)
                    .select([
                    "messageId",
                    "senderId",
                    "message",
                    "messageType",
                    "sendDate"
                ]);
            }
            else {
                return yield db_1.default("messages")
                    .where(function () {
                    this.where("senderId", id).where("receiverId", userId);
                })
                    .orWhere(function () {
                    this.where("receiverId", id).where("senderId", userId);
                })
                    .select([
                    "messageId",
                    "senderId",
                    "receiverId",
                    "message",
                    "messageType",
                    "sendDate"
                ]);
            }
        });
    }
    getUserIdFromSocket(socket) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let user = (yield db_1.default("users")
                    .where({ connectionId: socket.id })
                    .select(["userId"]));
                console.log("user", user);
                console.log("socket", socket.id);
                if (user)
                    return user[0].userId;
                else {
                    let token = cookie.parse(socket.handshake.headers.cookie).token;
                    if (token) {
                        return yield new auth_model_1.default().updateUserConnection({
                            token: token,
                            connectionId: socket.id
                        });
                    }
                }
            }
            catch (e) {
                console.log(e);
                return 0;
            }
        });
    }
    processMessage(signal, socket) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let userId = yield this.getUserIdFromSocket(socket);
                console.log("userid from socket", userId);
                if (userId) {
                    yield db_1.default("messages").insert({
                        senderId: userId,
                        receiverId: signal.to,
                        isGroupChat: signal.isGroupMessage,
                        messageType: signal.type,
                        message: signal.message,
                        sendDate: new Date()
                    });
                    let receiver = yield db_1.default("users")
                        .where({ userId: signal.to })
                        .select(["connectionId"]);
                    console.log("receiver", receiver[0]);
                    if (receiver.length) {
                        let outgoingSignal = new signal_1.OutgoingSignal();
                        outgoingSignal.from = userId;
                        outgoingSignal.groupId = 0;
                        outgoingSignal.type = signal.type;
                        outgoingSignal.message = signal.message;
                        outgoingSignal.to = Number(signal.to);
                        socket
                            .to(receiver[0].connectionId)
                            .emit("message", JSON.stringify(outgoingSignal));
                    }
                }
            }
            catch (e) {
                console.error(socket.id, e);
            }
        });
    }
}
exports.default = Chat;
//# sourceMappingURL=chat.model.js.map