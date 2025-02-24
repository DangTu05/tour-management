import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.config";
const Category = sequelize.define(
  "categories",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(500),
    },
    description: {
      type: DataTypes.TEXT("long"),
    },
    status: {
      type: DataTypes.STRING(20),
      defaultValue: "active",
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    position: {
      type: DataTypes.INTEGER,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  },

  { tableName: "categories", timestamps: true }
);
export default Category;
