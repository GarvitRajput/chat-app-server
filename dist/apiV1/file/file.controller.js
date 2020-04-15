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
const cdn = require("../../helpers/cdn");
var request = require("request");
class FileController {
    constructor() {
        this.post = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req.files);
            var url;
            if (!Array.isArray(req.files.file)) {
                let fileUrl = yield cdn.uploadFile(req.files.file.data);
                url = `/v1/file/get/${fileUrl}/${req.files.file.name}`;
            }
            else {
                url = [];
                for (let count = 0; count < req.files.file.length; count++) {
                    let fileUrl = yield cdn.uploadFile(req.files.file[count].data);
                    url.push(`/v1/file/get/${fileUrl}/${req.files.file[count].name}`);
                }
            }
            try {
                res.status(200).send({
                    success: true,
                    data: { path: url },
                });
            }
            catch (err) {
                res.status(500).send({
                    success: false,
                    message: err.toString(),
                    data: null,
                });
            }
        });
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (req.query.size)
                request(`https://drive.google.com/thumbnail?sz=w${req.params.size}&id=${req.params.id}`).pipe(res);
            else
                request(`https://drive.google.com/uc?export=view&id=${req.params.id}`).pipe(res);
        });
    }
    uploadFile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let filePath = "";
            try {
                if (req.files) {
                    let filename = `${req.files.file.name.split(".")[0]}_${req.userId}_${new Date().getTime().toString()}.${req.files.file.name.split(".")[req.files.file.name.split(".").length - 1]}`;
                    req.files.file.mv("./data/data/" + filename, function (err) {
                        if (err)
                            console.log(err);
                    });
                    filePath = "/data/" + filename;
                    res.status(200).send({
                        success: true,
                        data: {
                            path: filePath,
                        },
                    });
                }
                else {
                    res.status(400).send({ success: false, error: "no file passed" });
                }
            }
            catch (e) {
                console.log(e);
                res.status(401).send({ success: false, error: "Unauthorized" });
            }
        });
    }
}
exports.default = FileController;
//# sourceMappingURL=file.controller.js.map