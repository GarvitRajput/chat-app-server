"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyToken_1 = require("../../helpers/verifyToken");
const meta_controller_1 = require("./meta.controller");
const meta = express_1.Router();
const controller = new meta_controller_1.default();
// Retrieve all Users
meta.post('/get', verifyToken_1.default, controller.fetchMetaData);
exports.default = meta;
//# sourceMappingURL=meta.route.js.map