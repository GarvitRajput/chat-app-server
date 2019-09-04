import db from "../../config/db";
import { deflateRawSync } from "zlib";

export default class Group {
  async create(data) {
    let groupId = await db("groups")
      .returning(["groupId"])
      .insert({
        groupName: data.groupName,
        description: data.description,
        createdBy: data.userId,
        createdOn: new Date()
      });
    groupId = groupId[0];
    let groupMembers = [];
    data.users.push(data.userId);
    data.users.forEach(id => {
      groupMembers.push({
        groupId: groupId,
        memberId: id,
        addedOn: new Date(),
        addedBy: data.userId
      });
    });
    await db("groupMembers").insert(groupMembers);
    return groupId;
  }
  async update(data) {
    let group = await db("groupMembers")
      .where({ groupId: data.groupId, memberId: data.userId })
      .select(["groupId", "memberId"]);
    if (group.length) {
      await db("groups")
        .where({ groupId: data.groupId, createdBy: data.userId })
        .update({
          groupName: data.groupName,
          description: data.description
        });
      let members = (await db("groupMembers")
        .where({ groupId: data.groupId })
        .select(["memberId"])).map(id => id.memberId);
      let toBeInserted = data.users.filter(id => !members.includes(id));
      let groupMembers = [];
      toBeInserted.forEach(id => {
        groupMembers.push({
          groupId: data.groupId,
          memberId: id,
          addedOn: new Date(),
          addedBy: data.userId
        });
      });
      await db("groupMembers")
        .where(builder => builder.whereNotIn("memberId", [...data.users]))
        .del();

      await db("groupMembers").insert(groupMembers);
      return true;
    } else {
      return false;
    }
  }

  async getGroupInfo(id) {
    let data = (await db("groups")
      .where("groupId", "=", id)
      .select(["groupId", "groupName", "description"]))[0];
    data.users = (await db("groupMembers")
      .where("groupId", "=", id)
      .orderBy("memberId")
      .select(["memberId"])).map(member => Number(member.memberId));
    return data;
  }

  async getJoinedGroups(id) {
    let data = await db("groupMembers")
      .where("memberId", "=", id)
      .select(["groupId"]);
    let groups = [];
    for (let count = 0; count < data.length; count++) {
      groups.push(await this.getGroupInfo(data[count].groupId));
    }
    return groups;
  }
}
