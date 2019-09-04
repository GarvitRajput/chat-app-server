"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config/config");
var CryptoJS = require("crypto-js");
class Crypto {
    static encrypt(data) {
        return CryptoJS.AES.encrypt(data, config_1.default.AES_KEY).toString();
    }
    static decrypt(token) {
        return CryptoJS.AES.decrypt(token, config_1.default.AES_KEY).toString(CryptoJS.enc.Utf8);
    }
    static hash(data) {
        return CryptoJS.SHA256(data).toString();
    }
}
exports.default = Crypto;
//# sourceMappingURL=crypto.js.map