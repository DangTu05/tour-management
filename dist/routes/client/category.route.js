"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Category_controller_1 = __importDefault(require("../../controllers/client/Category.controller"));
const router = express_1.default.Router();
router.get("/categories", Category_controller_1.default.index);
exports.default = router;
