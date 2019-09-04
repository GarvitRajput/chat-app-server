"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
var db = require("knex")({
    client: config_1.default.DB_DIALECT,
    connection: {
        user: config_1.default.DB_USER,
        password: config_1.default.DB_PASSWORD,
        host: config_1.default.DB_HOST,
        database: config_1.default.DB_NAME,
        ssl: true
    }
});
exports.default = db;
//# sourceMappingURL=db.js.map