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
const chat_model_1 = require("../chat/chat.model");
class User {
    getUserByUserId(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield db_1.default("users")
                .where({ userId: userId })
                .select([
                "userId",
                "firstName",
                "lastName",
                "email",
                "city",
                "state",
                "country",
                "bio",
                "mobile",
                "website",
                "profileImagePath",
                "facebookProfileUrl",
                "twitterProfileUrl",
                "linkedInProfileUrl",
                "googlePlusProfileUrl",
                "instagramProfileUrl",
                "dribbleProfileUrl",
            ]);
            if (user.length) {
                return {
                    userId: user[0].userId,
                    firstName: user[0].firstName,
                    lastName: user[0].lastName,
                    email: user[0].email,
                    mobile: user[0].mobile,
                    website: user[0].website,
                    city: user[0].city,
                    state: user[0].state,
                    country: user[0].country,
                    bio: user[0].bio,
                    profileImagePath: user[0].profileImagePath,
                    facebookProfileUrl: user[0].facebookProfileUrl,
                    linkedInProfileUrl: user[0].linkedInProfileUrl,
                    twitterProfileUrl: user[0].twitterProfileUrl,
                    googlePlusProfileUrl: user[0].googlePlusProfileUrl,
                    instagramProfileUrl: user[0].instagramProfileUrl,
                    dribbleProfileUrl: user[0].dribbleProfileUrl,
                };
            }
            else {
                return null;
            }
        });
    }
    updateUserProfile(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_1.default("users").where({ userId: id }).update({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                mobile: data.mobile,
                website: data.website,
                city: data.city,
                state: data.state,
                country: data.country,
                bio: data.bio,
                profileImagePath: data.profileImagePath,
                facebookProfileUrl: data.facebookProfileUrl,
                linkedInProfileUrl: data.linkedInProfileUrl,
                twitterProfileUrl: data.twitterProfileUrl,
                googlePlusProfileUrl: data.googlePlusProfileUrl,
                instagramProfileUrl: data.instagramProfileUrl,
                dribbleProfileUrl: data.dribbleProfileUrl,
            });
        });
    }
    getActiveUsers(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let users = [];
            let data = yield db_1.default("users")
                .where("userId", "!=", id)
                .select([
                "userId",
                "firstName",
                "lastName",
                "email",
                "city",
                "state",
                "country",
                "bio",
                "mobile",
                "website",
                "connectionId",
                "profileImagePath",
                "facebookProfileUrl",
                "twitterProfileUrl",
                "linkedInProfileUrl",
                "googlePlusProfileUrl",
                "instagramProfileUrl",
                "dribbleProfileUrl",
            ]);
            for (let index = 0; index < data.length; index++) {
                let user = data[index];
                let message = yield new chat_model_1.default().lastMessage(id, user.userId);
                yield users.push({
                    userId: user.userId,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    mobile: user.mobile,
                    website: user.website,
                    city: user.city,
                    state: user.state,
                    country: user.country,
                    bio: user.bio,
                    online: !!user.connectionId,
                    profileImagePath: user.profileImagePath,
                    facebookProfileUrl: user.facebookProfileUrl,
                    linkedInProfileUrl: user.linkedInProfileUrl,
                    twitterProfileUrl: user.twitterProfileUrl,
                    googlePlusProfileUrl: user.googlePlusProfileUrl,
                    instagramProfileUrl: user.instagramProfileUrl,
                    dribbleProfileUrl: user.dribbleProfileUrl,
                    lastMessage: message[0],
                });
            }
            return users;
        });
    }
}
exports.default = User;
//# sourceMappingURL=user.model.js.map