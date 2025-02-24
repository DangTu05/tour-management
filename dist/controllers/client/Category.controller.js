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
const caregory_model_1 = __importDefault(require("../../models/caregory.model"));
const database_config_1 = require("../../config/database.config");
const sequelize_1 = require("sequelize");
class CategoryController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield caregory_model_1.default.findAll({
                    where: {
                        deleted: false,
                        status: "active",
                    },
                    raw: true,
                });
                res.json({
                    code: 200,
                    message: "Success",
                    data: categories,
                });
            }
            catch (_a) {
                res.status(500).json({ message: "Đã có lỗi xảy ra!!!" });
            }
        });
    }
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const slug = req.params.slug;
                const category = yield database_config_1.sequelize.query("", {
                    type: sequelize_1.QueryTypes.SELECT,
                });
                res.json({
                    code: 200,
                    message: "Success",
                    data: category,
                });
            }
            catch (_a) {
                res.status(500).json({ message: "Đã có lỗi xảy ra!!!" });
            }
        });
    }
}
exports.default = new CategoryController();
