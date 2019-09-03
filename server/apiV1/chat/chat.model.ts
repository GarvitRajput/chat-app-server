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
      .whereIn("UserId", function() {
        this.select("SenderId")
          .where("IsGroupChat", "=", "0")
          .where("ReceiverId", "=", id)
          .from("Messages");
      })
      .orWhereIn("UserId", function() {
        this.select("ReceiverId")
          .where("IsGroupChat", "=", "0")
          .where("SenderId", "=", id)
          .from("Messages");
      })
      .groupBy("UserId")
      .select(["UserId"]);
    data.forEach(user => {
      if (user.userId != id)
        chat.push({
          userId: user.UserId,
          IsGroup: 0
        });
    });
    data = [];
    data = await db("Groups")
      .whereIn("GroupID", function() {
        this.select("ReceiverId")
          .where("IsGroupChat", "=", "1")
          .from("Messages");
      })
      .whereIn("GroupID", function() {
        this.select("GroupId")
          .where("MemberId", "=", id)
          .from("GroupMembers");
      })
      .select(["GroupId"]);

    data.forEach(async id => {
      let groupInfo = await new Group().getGroupInfo(id);
      groupInfo.IsGroup = 1;
      chat.push(groupInfo);
    });

    return chat;
  }

  async getChat(id, isGroup, userId) {
    if (isGroup) {
      return await db("Messages")
        .where("ReceiverId", "=", id)
        .select([
          "MessageId",
          "SenderId",
          "Message",
          "MessageType",
          "SendDate"
        ]);
    } else {
      return await db("Messages")
        .where(function() {
          this.where("SenderId", id).where("ReceiverId", userId);
        })
        .orWhere(function() {
          this.where("ReceiverId", id).where("SenderId", userId);
        })
        .select([
          "MessageId",
          "SenderId",
          "ReceiverId",
          "Message",
          "MessageType",
          "SendDate"
        ]);
    }
  }

  async getUserIdFromSocket(socket) {
    try {
      let user = (await db("Users")
        .where({ ConnectionId: socket.id })
        .select(["UserId"]))[0];
      if (user) return user.UserId;
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
      return 0;
    }
  }

  async processMessage(signal: IncomingSignalData, socket) {
    try {
      let UserId = await this.getUserIdFromSocket(socket);
      if (UserId) {
        await db("Messages").insert({
          SenderId: UserId,
          ReceiverId: signal.to,
          IsGroupChat: signal.isGroupMessage,
          MessageType: signal.type,
          Message: signal.message,
          SendDate: new Date()
        });
        let receiver = await db("Users")
          .where({ UserId: signal.to })
          .select(["ConnectionId"]);
        if (receiver.length) {
          let outgoingSignal = new OutgoingSignal();
          outgoingSignal.from = UserId;
          outgoingSignal.groupId = 0;
          outgoingSignal.type = signal.type;
          outgoingSignal.message = signal.message;
          outgoingSignal.to = Number(signal.to);
          socket
            .to(receiver[0].ConnectionId)
            .emit("message", JSON.stringify(outgoingSignal));
        }
      }
    } catch (e) {
      console.error(socket.id, e);
    }
  }
}
