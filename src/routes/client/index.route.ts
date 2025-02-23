import { Application } from "express";
import TourRoute from "./tour.route";
function router(app: Application): void {
  app.use("/tour", TourRoute);
}
export default router;
