"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlingMiddleware = void 0;
const http_status_codes_1 = require("http-status-codes");
const environment_config_1 = __importDefault(require("../config/environment.config"));
const errorHandlingMiddleware = (err, req, res, next) => {
    if (!err.statusCode)
        err.statusCode = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
    const responseError = {
        statusCode: err.statusCode,
        message: err.message || http_status_codes_1.StatusCodes[err.statusCode],
        stack: err.stack,
    };
    if (environment_config_1.default.BUILD_MODE !== "dev")
        delete responseError.stack;
    res.status(responseError.statusCode).json(responseError);
};
exports.errorHandlingMiddleware = errorHandlingMiddleware;
