import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as fileUpload from "express-fileupload";
var useragent = require("express-useragent");
import apiV1 from "./apiV1/index";
import * as errorHandler from "./helpers/errorHandler";
import config from "./config/config";
import * as compress from "compression";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.setMiddlewares();
    this.setRoutes();
    this.catchErrors();
  }

  private setMiddlewares(): void {
    if (process.env.NODE_ENV !== "development") {
      this.express.use(
        cors({ credentials: true, origin: "http://localhost:4200" })
      );
    }
    this.express.use(bodyParser.json());
    this.express.use(fileUpload());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(compress());
    this.express.use(useragent.express());
    this.express.use(express.static("data"));
    this.express.use(express.static(config.CLIENT_APP));
    this.express.use("/login", express.static(config.CLIENT_APP));
    this.express.use("/register", express.static(config.CLIENT_APP));
    this.express.use("/home", express.static(config.CLIENT_APP));
  }

  private setRoutes(): void {
    this.express.use("/v1", apiV1);
  }

  private catchErrors(): void {
    this.express.use(errorHandler.notFound);
    this.express.use(errorHandler.internalServerError);
  }
}

export default new App().express;
