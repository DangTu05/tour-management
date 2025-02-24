/* eslint-disable no-console */
import env from "../config/environment.config";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  env.DATABASE_NAME as string,
  env.DATABASE_USER as string,
  env.DATABASE_PASSWORD as string,
  {
    host: env.DATABASE_HOST as string,
    dialect: "mysql",
    port: 3306, // Đảm bảo cổng đúng với MySQL của bạn
    logging: false, // Tắt logging của Sequelize (tuỳ chọn)
  }
);

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("==> Kết nối database thành công.");
    await sequelize.sync({ alter: true });
    console.log("==> TABLE DONE !");
  } catch (error) {
    console.error("Không thể kết nối database:", error);
  }
}
export default connectDB;

