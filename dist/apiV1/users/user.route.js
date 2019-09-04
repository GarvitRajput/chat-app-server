"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("../../helpers/verifyToken");
const user_controller_1 = require("./user.controller");
const user = express_1.Router();
const controller = new user_controller_1.default();
// Retrieve all Users
user.get('/profile', verifyToken_1.default, controller.getProfile);
user.post('/update-profile', verifyToken_1.default, controller.updateProfile);
user.get('/active-users', verifyToken_1.default, controller.activeUsers);
exports.default = user;
//# sourceMappingURL=user.route.js.map