"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const user = express_1.Router();
const controller = new auth_controller_1.default();
// Sign In
user.post('/authenticate', controller.authenticate);
// Register New User
user.post('/register', controller.register);
exports.default = user;
//# sourceMappingURL=auth.route.js.map