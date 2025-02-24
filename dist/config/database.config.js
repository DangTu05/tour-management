"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const environment_config_1 = __importDefault(require("../config/environment.config"));
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize(environment_config_1.default.DATABASE_NAME, environment_config_1.default.DATABASE_USER, environment_config_1.default.DATABASE_PASSWORD, {
    host: environment_config_1.default.DATABASE_HOST,
    dialect: "mysql",
    port: 3306,
    logging: false,
});
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.sequelize.authenticate();
            console.log("==> Kết nối database thành công.");
            yield exports.sequelize.sync({ alter: true });
            console.log("==> TABLE DONE !");
        }
        catch (error) {
            console.error("Không thể kết nối database:", error);
        }
    });
}
exports.default = connectDB;
