import app from "./App";
import CONFIG from "./config/config";
//import './config/db';

const PORT = CONFIG.PORT;

var http = require("http").createServer(app);
var io = require("socket.io")(http);

require("./helpers/socket")(io);


http.listen(PORT, function() {
  console.log("server is listening on *:" + PORT);
});
