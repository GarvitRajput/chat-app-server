import db from "../../config/db";
import Group from "../group/group.model";
import {
  IncomingSignalData,
  SignalDataType,
  OutgoingSignal
} from "../../helpers/signal";
import User from "../users/user.model";

export default class Chat {
  async create(data) {
    let groupid = await db("groups")
      .returning(["GroupId"])
      .insert({
        GroupName: data.groupName,
        Description: data.description,
        CreatedBy: data.userId,
        CreatedOn: new Date()
      });
    groupid = groupid[0];
    let groupMembers = [];
    data.users.push(data.userId);
    data.users.forEach(id => {
      groupMembers.push({
        GroupId: groupid,
        MemberId: id,
        AddedOn: new Date(),
        AddedBy: data.userId
      });
    });
    await db("GroupMembers").insert(groupMembers);
    return groupid;
  }
  async update(data) {
    let group = await db("groupMembers")
      .where({ GroupId: data.groupId, MemberId: data.userId })
      .select(["GroupId", "MemberId"]);
    if (group.length) {
      await db("groups")
        .where({ GroupId: data.groupId, CreatedBy: data.userId })
        .update({
          GroupName: data.groupName,
          Description: data.description
        });
      let members = (await db("groupMembers")
        .where({ GroupId: data.groupId })
        .select(["MemberId"])).map(id => id.MemberId);
      console.log(members);
      let toBeInserted = data.users.filter(id => !members.includes(id));
      let groupMembers = [];
      toBeInserted.forEach(id => {
        groupMembers.push({
          GroupId: data.groupId,
          MemberId: id,
          AddedOn: new Date(),
          AddedBy: data.userId
        });
      });
      await db("GroupMembers")
        .where(builder => builder.whereNotIn("MemberId", [...data.users]))
        .del();

      await db("GroupMembers").insert(groupMembers);
      return true;
    } else {
      return false;
    }
  }
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
          "Message",
          "MessageType",
          "SendDate"
        ]);
    }
  }

  async processMessage(signal: IncomingSignalData, socket) {
    try {
      let UserId = (await db("Users")
        .where({ ConnectionId: socket.id })
        .select(["UserId"]))[0].UserId;
      await db("Messages").insert({
        SenderId: UserId,
        ReceiverId: signal.to,
        IsGroupChat: signal.isGroupMessage,
        MessageType: signal.type,
        Message: signal.message,
        SendDate: new Date()
      });
      console.log(signal);
      let receiver = await db("Users")
        .where({ UserId: signal.to })
        .select(["ConnectionId"]);
          console.log(receiver);
          if (receiver.length) {
        let outgoingSignal = new OutgoingSignal();
        outgoingSignal.from = UserId;
        outgoingSignal.groupId = 0;
        outgoingSignal.message = signal.message;
        outgoingSignal.to = Number(signal.to);
        socket
          .to(receiver[0].ConnectionId)
          .emit("message", JSON.stringify(outgoingSignal));
      }
    } catch (e) {
      console.error(e);
    }
  }
}
