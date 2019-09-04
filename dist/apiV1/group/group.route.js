"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("../../helpers/verifyToken");
const group_controller_1 = require("./group.controller");
const group = express_1.Router();
const controller = new group_controller_1.default();
// Retrieve all Users
group.post('/create', verifyToken_1.default, controller.create);
group.post('/update', verifyToken_1.default, controller.update);
group.get('/list', verifyToken_1.default, controller.getJoinedGroups);
exports.default = group;
//# sourceMappingURL=group.route.js.map