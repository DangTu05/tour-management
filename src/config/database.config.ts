/* eslint-disable no-console */
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cc9200c ( Khởi tạo dự án và kết nối với db)
import { Sequelize } from "sequelize";
const sequelize = new Sequelize("tour", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
export default sequelize;
<<<<<<< HEAD
=======
=======
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
>>>>>>> c258979 ( Khởi tạo dự án và kết nối với db)
>>>>>>> cc9200c ( Khởi tạo dự án và kết nối với db)
