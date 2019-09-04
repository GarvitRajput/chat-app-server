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
const crypto_1 = require("./crypto");
const verifyToken = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    // check header or url parameters or post parameters for token
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res
                .status(401)
                .send({ success: false, message: "No token provided." });
        }
        // verifies secret and checks exp
        const decoded = JSON.parse(crypto_1.default.decrypt(token));
        if (JSON.stringify(req.useragent) !== JSON.stringify(decoded.agent))
            throw "Invalid Token";
        req.userId = decoded.id;
        next();
    }
    catch (err) {
        res.status(401).send({ success: false, message: "Invalid Token" });
    }
});
exports.default = verifyToken;
//# sourceMappingURL=verifyToken.js.map