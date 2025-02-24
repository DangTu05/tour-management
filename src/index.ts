/* eslint-disable no-console */
import express, { Express } from "express";
import connectDB from "./config/database.config";
import env from "./config/environment.config";
import router from "./routes/client/index.route";
import { errorHandlingMiddleware } from "./middlewares/errorHandling.middleware";
const app: Express = express();
const port: number = parseInt(env.PORT as string);
const startServer = (): void => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
};
/// anonymous async function(IIFE)
(async (): Promise<void> => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  router(app);
  // Xử lý lỗi tập chung
  app.use(errorHandlingMiddleware);
  try {
    console.log("Connecting to database...");
    /// Kết nối db, chỉ khi thành công mới chạy server
    await connectDB();
    startServer();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
