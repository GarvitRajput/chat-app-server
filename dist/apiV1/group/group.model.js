"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../../config/db");
class Group {
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let groupId = yield db_1.default("groups")
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
            yield db_1.default("groupMembers").insert(groupMembers);
            return groupId;
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let group = yield db_1.default("groupMembers")
                .where({ groupId: data.groupId, memberId: data.userId })
                .select(["groupId", "memberId"]);
            if (group.length) {
                yield db_1.default("groups")
                    .where({ groupId: data.groupId, createdBy: data.userId })
                    .update({
                    groupName: data.groupName,
                    description: data.description
                });
                let members = (yield db_1.default("groupMembers")
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
                yield db_1.default("groupMembers")
                    .where(builder => builder.whereNotIn("memberId", [...data.users]))
                    .del();
                yield db_1.default("groupMembers").insert(groupMembers);
                return true;
            }
            else {
                return false;
            }
        });
    }
    getGroupInfo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = (yield db_1.default("groups")
                .where("groupId", "=", id)
                .select(["groupId", "groupName", "description"]))[0];
            data.users = (yield db_1.default("groupMembers")
                .where("groupId", "=", id)
                .orderBy("memberId")
                .select(["memberId"])).map(member => Number(member.memberId));
            return data;
        });
    }
    getJoinedGroups(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield db_1.default("groupMembers")
                .where("memberId", "=", id)
                .select(["groupId"]);
            let groups = [];
            for (let count = 0; count < data.length; count++) {
                groups.push(yield this.getGroupInfo(data[count].groupId));
            }
            return groups;
        });
    }
}
exports.default = Group;
//# sourceMappingURL=group.model.js.map