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
const express_1 = __importDefault(require("express"));
const database_config_1 = __importDefault(require("./config/database.config"));
const environment_config_1 = __importDefault(require("./config/environment.config"));
const index_route_1 = __importDefault(require("./routes/client/index.route"));
const errorHandling_middleware_1 = require("./middlewares/errorHandling.middleware");
const app = (0, express_1.default)();
const port = parseInt(environment_config_1.default.PORT);
const startServer = () => {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    (0, index_route_1.default)(app);
    app.use(errorHandling_middleware_1.errorHandlingMiddleware);
    try {
        console.log("Connecting to database...");
        yield (0, database_config_1.default)();
        startServer();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
}))();
