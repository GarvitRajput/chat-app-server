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
const crypto_1 = require("../../helpers/crypto");
const signal_1 = require("../../helpers/signal");
class Authentication {
    auth(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield db_1.default("users")
                .where({ email: email, password: password })
                .select(["userId", "firstName", "lastName", "email"]);
            if (user[0]) {
                yield db_1.default("users")
                    .where({ email: email, password: password })
                    .update({ lastLogin: new Date() });
                return {
                    userId: user[0].userId,
                    firstName: user[0].firstName,
                    lastName: user[0].lastName,
                    email: user[0].email
                };
            }
            else
                return null;
        });
    }
    register(firstName, lastName, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield db_1.default("users")
                .where({ email: email })
                .select(["userId"]);
            if (user.length)
                return null;
            else
                user = yield db_1.default("users")
                    .returning(["userId"])
                    .insert({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    createdOn: new Date()
                });
            return { userId: user[0].userId, firstName, lastName, email };
        });
    }
    updateUserConnection(data, io) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = JSON.parse(crypto_1.default.decrypt(data.token)).id;
                yield db_1.default("users")
                    .where({ userId: id })
                    .update({
                    connectionId: data.connectionId
                });
                let status = new signal_1.UserStatusUpdate();
                status.status = true;
                status.userId = id;
                io.sockets.emit("statusupdate", JSON.stringify(status));
                return id;
            }
            catch (e) {
                console.log("error", e);
                return 0;
            }
        });
    }
    removeUserConnection(id, io) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            let userId = (yield db_1.default("users")
                .returning("userId")
                .where({ connectionId: id })
                .update({
                connectionId: null
            }))[0];
            console.log(userId);
            let status = new signal_1.UserStatusUpdate();
            status.status = false;
            status.userId = userId;
            io.sockets.emit("statusupdate", JSON.stringify(status));
        });
    }
}
exports.default = Authentication;
//# sourceMappingURL=auth.model.js.map