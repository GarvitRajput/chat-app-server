"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("../../helpers/verifyToken");
const file_controller_1 = require("./file.controller");
const file = express_1.Router();
const controller = new file_controller_1.default();
// Retrieve all Users
file.post('/upload', verifyToken_1.default, controller.post);
file.get('/get/:id/:name', controller.get);
exports.default = file;
//# sourceMappingURL=file.route.js.map