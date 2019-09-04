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
const group_model_1 = require("./group.model");
class GroupController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = req.body;
                data.userId = req.userId;
                yield new group_model_1.default().create(data);
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
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = req.body;
                data.userId = req.userId;
                let success = yield new group_model_1.default().update(data);
                res.status(200).send({
                    success: success
                });
            }
            catch (e) {
                console.log(e);
                res.status(401).send({ success: false, error: "Unauthorized" });
            }
        });
    }
    getJoinedGroups(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = yield new group_model_1.default().getJoinedGroups(req.userId);
                res.status(200).send({
                    success: true,
                    data: {
                        groups: data
                    }
                });
            }
            catch (e) {
                console.log(e);
                res.status(401).send({ success: false, error: "Unauthorized" });
            }
        });
    }
}
exports.default = GroupController;
//# sourceMappingURL=group.controller.js.map