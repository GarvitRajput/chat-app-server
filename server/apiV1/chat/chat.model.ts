import db from "../../config/db";
import Group from "../group/group.model";
import {
  IncomingSignalData,
  SignalDataType,
  OutgoingSignal
} from "../../helpers/signal";
import User from "../users/user.model";
import Authentication from "../auth/auth.model";
var cookie = require("cookie");

export default class Chat {
  async getAvailableChats(id) {
    let chat = [];
    let data = await db("users")
      .whereIn("userId", function() {
        this.select("senderId")
          .where("isGroupChat", "=", "0")
          .where("receiverId", "=", id)
          .from("messages");
      })
      .orWhereIn("userId", function() {
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
    data = await db("groups")
      .whereIn("groupId", function() {
        this.select("receiverId")
          .where("isGroupChat", "=", "1")
          .from("messages");
      })
      .whereIn("groupId", function() {
        this.select("groupId")
          .where("memberId", "=", id)
          .from("groupMembers");
      })
      .select(["groupId"]);

    data.forEach(async id => {
      let groupInfo = await new Group().getGroupInfo(id);
      groupInfo.IsGroup = 1;
      chat.push(groupInfo);
    });

    return chat;
  }

  async getChat(id, isGroup, userId) {
    if (isGroup) {
      return await db("messages")
        .where("receiverId", "=", id)
        .select([
          "messageId",
          "senderId",
          "message",
          "messageType",
          "sendDate"
        ]);
    } else {
      return await db("messages")
        .where(function() {
          this.where("senderId", id).where("receiverId", userId);
        })
        .orWhere(function() {
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
  }

  async getUserIdFromSocket(socket) {
    try {
      let user = (await db("users")
        .where({ connectionId: socket.id })
        .select(["userId"]));
      console.log("user", user);
      console.log("socket", socket.id);
      if (user) return user[0].userId;
      else {
        let token = cookie.parse(socket.handshake.headers.cookie).token;
        if (token) {
          return await new Authentication().updateUserConnection({
            token: token,
            connectionId: socket.id
          });
        }
      }
    } catch (e) {
      console.log(e);
      return 0;
    }
  }

  async processMessage(signal: IncomingSignalData, socket) {
    try {
      let userId = await this.getUserIdFromSocket(socket);
      console.log("userid from socket", userId);
      if (userId) {
        await db("messages").insert({
          senderId: userId,
          receiverId: signal.to,
          isGroupChat: signal.isGroupMessage,
          messageType: signal.type,
          message: signal.message,
          sendDate: new Date()
        });
        let receiver = await db("users")
          .where({ userId: signal.to })
          .select(["connectionId"]);
        console.log("receiver", receiver[0]);
        if (receiver.length) {
          let outgoingSignal = new OutgoingSignal();
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
    } catch (e) {
      console.error(socket.id, e);
    }
  }
}
