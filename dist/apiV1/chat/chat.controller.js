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
const chat_model_1 = require("./chat.model");
class ChatController {
    getChatMessages(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = req.body;
                data.userId = req.userId;
                let messages = yield new chat_model_1.default().getChat(data.id, data.isGroup, data.userId);
                res.status(200).send({
                    success: true,
                    data: {
                        messages
                    }
                });
            }
            catch (e) {
                console.log(e);
                res.status(401).send({ success: false, error: "Unauthorized" });
            }
        });
    }
    getAvailableChats(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let activeChats = yield new chat_model_1.default().getAvailableChats(req.userId);
                res.status(200).send({
                    success: true,
                    data: {
                        activeChats
                    }
                });
            }
            catch (e) {
                console.error(e);
                res.status(401).send({ success: false, error: "Unauthorized" });
            }
        });
    }
}
exports.default = ChatController;
//# sourceMappingURL=chat.controller.js.map