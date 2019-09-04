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
const db_1 = require("../config/db");
db_1.default.schema.hasTable("users").then(function (exists) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!exists) {
            yield db_1.default.schema.createTable("users", function (t) {
                t.increments("userId").primary();
                t.string("firstName", 100);
                t.string("lastName", 100);
                t.text("email");
                t.string("city", 100);
                t.string("state", 100);
                t.string("country", 100);
                t.text("bio");
                t.string("mobile", 20);
                t.text("website");
                t.text("password");
                t.text("profileImagePath");
                t.text("facebookProfileUrl");
                t.text("twitterProfileUrl");
                t.text("linkedInProfileUrl");
                t.text("googlePlusProfileUrl");
                t.text("instagramProfileUrl");
                t.text("youtubeProfileUrl");
                t.text("dribbleProfileUrl");
                t.timestamp("lastLogin");
                t.timestamp("createdOn");
            });
        }
    });
});
db_1.default.schema.hasTable("groups").then(function (exists) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!exists) {
            yield db_1.default.schema.createTable("groups", function (t) {
                t.increments("groupId").primary();
                t.string("groupName", 100);
                t.text("description");
                t.timestamp("createdOn");
                t.integer("createdBy");
            });
        }
    });
});
db_1.default.schema.hasTable("groupMembers").then(function (exists) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!exists) {
            yield db_1.default.schema.createTable("groupMembers", function (t) {
                t.increments("groupMemberId").primary();
                t.integer("groupId");
                t.integer("memberId");
                t.timestamp("addedOn");
                t.integer("addedBy");
            });
        }
    });
});
db_1.default.schema.hasTable("messages").then(function (exists) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!exists) {
            yield db_1.default.schema.createTable("messages", function (t) {
                t.increments("messageId").primary();
                t.integer("senderId");
                t.integer("receiverId");
                t.boolean("isGroupChat");
                t.text("message");
                t.integer("messageType");
                t.timestamp("sendDate");
            });
        }
    });
});
db_1.default.schema.hasTable("linkMetadata").then(function (exists) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!exists) {
            yield db_1.default.schema.createTable("linkMetadata", function (t) {
                t.increments("Id").primary();
                t.text("url");
                t.text("author", 20);
                t.timestamp("date");
                t.text("description");
                t.text("imagePath");
                t.text("logo");
                t.text("publisher");
                t.text("title");
                t.text("audio");
                t.text("video");
                t.timestamp("addedDate");
            });
        }
    });
});
//# sourceMappingURL=script.js.map