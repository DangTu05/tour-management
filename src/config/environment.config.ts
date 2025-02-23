import dotenv from "dotenv";
dotenv.config();
const env = {
  PORT: process.env.PORT,
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_HOST: process.env.DATABASE_HOST,
  /// Khi chạy lện script thì biến này tự được nạp vào process.env
  BUILD_MODE: process.env.BUILD_MODE,
};
export default env;
