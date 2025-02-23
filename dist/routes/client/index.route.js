"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tour_route_1 = __importDefault(require("./tour.route"));
function router(app) {
    app.use("/tour", tour_route_1.default);
}
exports.default = router;
