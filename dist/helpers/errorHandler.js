"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpStatus = require("http-status");
// handle not found errors
exports.notFound = (req, res, next) => {
    res.status(httpStatus.NOT_FOUND);
    res.json({
        success: false,
        message: 'Requested Resource Not Found'
    });
    res.end();
};
// handle internal server errors
exports.internalServerError = (err, req, res, next) => {
    res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR);
    res.json({
        message: err.message,
        extra: err.extra,
        errors: err
    });
    res.end();
};
//# sourceMappingURL=errorHandler.js.map