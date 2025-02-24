import Category from "../../models/caregory.model";
import { Request, Response } from "express";
import { sequelize } from "../../config/database.config";
import { QueryTypes } from "sequelize";
class CategoryController {
  /// Danh sách các danh mục
  async index(req: Request, res: Response) {
    try {
      const categories = await Category.findAll({
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
    } catch {
      res.status(500).json({ message: "Đã có lỗi xảy ra!!!" });
    }
  }
  /// End danh sách các danh mục

  /// Chi tiết danh mục
  async detail(req: Request, res: Response) {
    try {
      const slug = req.params.slug;
      const category = await sequelize.query("", {
        type: QueryTypes.SELECT,
      });
      res.json({
        code: 200,
        message: "Success",
        data: category,
      });
    } catch {
      res.status(500).json({ message: "Đã có lỗi xảy ra!!!" });
    }
  }
}
export default new CategoryController();
