"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Tour_controller_1 = __importDefault(require("../../controllers/client/Tour.controller"));
const router = express_1.default.Router();
router.get("/tours", Tour_controller_1.default.index);
exports.default = router;
