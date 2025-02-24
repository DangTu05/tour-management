import express from "express";
import CategoryController from "../../controllers/client/Category.controller";
const router: express.Router = express.Router();
router.get("/categories", CategoryController.index);
export default router;
