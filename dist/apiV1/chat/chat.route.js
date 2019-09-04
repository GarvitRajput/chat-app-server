"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("../../helpers/verifyToken");
const chat_controller_1 = require("./chat.controller");
const chat = express_1.Router();
const controller = new chat_controller_1.default();
// Retrieve all Users
chat.get('/list', verifyToken_1.default, controller.getAvailableChats);
chat.post('/messages', verifyToken_1.default, controller.getChatMessages);
exports.default = chat;
//# sourceMappingURL=chat.route.js.map