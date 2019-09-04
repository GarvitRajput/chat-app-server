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
const crypto_1 = require("../../helpers/crypto");
const auth_model_1 = require("./auth.model");
class AuthController {
    constructor() {
        this.authenticate = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let { email, password } = req.body;
            try {
                password = crypto_1.default.hash(password + email + password);
                let user = yield new auth_model_1.default().auth(email, password);
                if (user) {
                    res.status(200).send({
                        success: true,
                        data: { user, token: AuthController.generateToken(user.userId, req) }
                    });
                }
                else {
                    res
                        .status(400)
                        .send({ success: false, error: "Invalid email or password!" });
                }
            }
            catch (err) {
                res.status(500).send({
                    success: false,
                    message: err.toString()
                });
            }
        });
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let { firstName, lastName, email, password } = req.body;
                password = crypto_1.default.hash(password + email + password);
                let user = yield new auth_model_1.default().register(firstName, lastName, email, password);
                if (user) {
                    res.status(200).send({
                        success: true,
                        data: {
                            user,
                            token: AuthController.generateToken(user.userId, req)
                        }
                    });
                }
                else {
                    res.status(400).send({ success: false, error: "User Already Exists!" });
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    static generateToken(userId, req) {
        console.log("token generated", userId);
        var auth = {
            id: userId,
            agent: req.useragent
        };
        return crypto_1.default.encrypt(JSON.stringify(auth));
    }
}
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map