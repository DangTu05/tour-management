import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.config";

const Tour = sequelize.define(
  "tours",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(255),
    },
    code: {
      allowNull: false,
      type: DataTypes.STRING(10),
    },
    images: {
      type: DataTypes.TEXT("long"),
    },
    price: {
      type: DataTypes.INTEGER,
    },
    discount: {
      type: DataTypes.INTEGER,
    },
    information: {
      type: DataTypes.TEXT("long"),
    },
    schedule: {
      type: DataTypes.TEXT("long"),
    },
    timeStart: {
      type: DataTypes.DATE,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.STRING(20),
    },
    position: {
      type: DataTypes.INTEGER,
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "tours",
    timestamps: true, // Tự động quản lý createdAt và updatedAt
  }
);

export default Tour;
