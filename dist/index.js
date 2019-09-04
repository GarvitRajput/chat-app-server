"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("./App");
const config_1 = require("./config/config");
//import './config/db';
const PORT = config_1.default.PORT;
var http = require("http").createServer(App_1.default);
var io = require("socket.io")(http);
require("./helpers/socket")(io);
http.listen(PORT, function () {
    console.log("server is listening on *:" + PORT);
});
//# sourceMappingURL=index.js.map