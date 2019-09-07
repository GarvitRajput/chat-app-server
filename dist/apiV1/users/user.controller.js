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
const user_model_1 = require("./user.model");
class UserController {
    getProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield new user_model_1.default().getUserByUserId(req.userId);
            if (user)
                res.status(200).send({
                    success: true,
                    data: {
                        user
                    }
                });
            else {
                res.status(401).send({ success: false, error: "Unauthorized" });
            }
        });
    }
    updateProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = JSON.parse(req.body.data);
            try {
                if (req.files) {
                    let filename = req.userId +
                        "." +
                        req.files.file.name.split(".")[req.files.file.name.split(".").length - 1];
                    req.files.file.mv("./data/images/" + filename, function (err) {
                        if (err)
                            console.log(err);
                    });
                    data.profileImagePath = "/images/" + filename;
                }
                yield new user_model_1.default().updateUserProfile(req.userId, data);
                res.status(200).send({
                    success: true
                });
            }
            catch (e) {
                console.log(e);
                res.status(401).send({ success: false, error: "Unauthorized" });
            }
        });
    }
    activeUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let users = yield new user_model_1.default().getActiveUsers(req.userId);
                res.status(200).send({
                    success: true,
                    data: {
                        users
                    }
                });
            }
            catch (e) {
                res.status(401).send({ success: false, error: "Unauthorized" });
            }
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map