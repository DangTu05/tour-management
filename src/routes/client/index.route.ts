import { Application } from "express";
import TourRoute from "./tour.route";
import CategoryRoute from "./category.route";
function router(app: Application): void {
  app.use("/tour", TourRoute);
  app.use("/category", CategoryRoute);
}
export default router;
