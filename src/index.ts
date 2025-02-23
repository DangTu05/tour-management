import express, { Express } from "express";
import sequelize from "./config/database.config";
import dotenv from "dotenv";
dotenv.config();
const app: Express = express();
const port: number = 3000;
sequelize;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
