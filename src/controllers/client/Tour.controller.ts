import Tour from "../../models/tour.model";
import { Request, Response } from "express";
class TourController {
  async index(req: Request, res: Response) {
    try {
      const tours = await Tour.findAll({
        where: {
          deleted: false,
          status: "active",
        },
        raw: true,
      });
      res.status(200).json(tours);
    } catch {
      res.status(500).json({ message: "Đã có lỗi xảy ra!!!" });
    }
  }
}
export default new TourController();
