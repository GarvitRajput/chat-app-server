import db from "../../config/db";
import { deflateRawSync } from "zlib";

export default class Group {
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

  async getGroupInfo(id) {
    let data = (await db("Groups")
      .where("GroupId", "=", id)
      .select(["groupId", "GroupName", "Description"]))[0];
    data.users = (await db("GroupMembers")
      .where("GroupId", "=", id)
      .orderBy("MemberId")
      .select(["MemberId"])).map(member => Number(member.MemberId));
    return data;
  }

  async getJoinedGroups(id) {
    let data = await db("GroupMembers")
      .where("MemberId", "=", id)
      .select(["GroupId"]);
    let groups = [];
    for (let count = 0; count < data.length; count++) {
      groups.push(await this.getGroupInfo(data[count].GroupId));
    }
    return groups;
  }
}
