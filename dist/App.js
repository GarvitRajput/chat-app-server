"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const fileUpload = require("express-fileupload");
var useragent = require("express-useragent");
const index_1 = require("./apiV1/index");
const errorHandler = require("./helpers/errorHandler");
const config_1 = require("./config/config");
const compress = require("compression");
class App {
    constructor() {
        this.express = express();
        this.setMiddlewares();
        this.setRoutes();
        this.catchErrors();
    }
    setMiddlewares() {
        if (process.env.NODE_ENV !== "development") {
            this.express.use(cors({ credentials: true, origin: "http://localhost:4200" }));
        }
        this.express.use(bodyParser.json());
        this.express.use(fileUpload());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(compress());
        this.express.use(useragent.express());
        this.express.use(express.static("data"));
        this.express.use(express.static(config_1.default.CLIENT_APP));
        this.express.use("/login", express.static(config_1.default.CLIENT_APP));
        this.express.use("/register", express.static(config_1.default.CLIENT_APP));
        this.express.use("/home", express.static(config_1.default.CLIENT_APP));
    }
    setRoutes() {
        this.express.use("/v1", index_1.default);
    }
    catchErrors() {
        this.express.use(errorHandler.notFound);
        this.express.use(errorHandler.internalServerError);
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map