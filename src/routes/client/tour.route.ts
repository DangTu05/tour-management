import express from "express";
import TourController from "../../controllers/client/Tour.controller";
const router = express.Router();
router.get("/tours", TourController.index);
export default router;
