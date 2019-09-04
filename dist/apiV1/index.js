"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("./auth/auth.route");
const user_route_1 = require("./users/user.route");
const group_route_1 = require("./group/group.route");
const chat_route_1 = require("./chat/chat.route");
const meta_route_1 = require("./meta/meta.route");
const file_route_1 = require("./file/file.route");
const router = express_1.Router();
router.use("/", auth_route_1.default);
router.use("/user", user_route_1.default);
router.use("/group", group_route_1.default);
router.use("/chat", chat_route_1.default);
router.use("/metadata", meta_route_1.default);
router.use("/file", file_route_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map