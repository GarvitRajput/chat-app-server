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
const meta_model_1 = require("./meta.model");
class MetaController {
    fetchMetaData(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let url = req.body.url;
                let metadata = yield new meta_model_1.default().getMetadata(url);
                res.status(200).send({
                    success: true,
                    data: {
                        metadata: metadata
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
exports.default = MetaController;
//# sourceMappingURL=meta.controller.js.map