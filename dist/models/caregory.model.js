"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_config_1 = require("../config/database.config");
const Category = database_config_1.sequelize.define("categories", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    image: {
        type: sequelize_1.DataTypes.STRING(500),
    },
    description: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    status: {
        type: sequelize_1.DataTypes.STRING(20),
        defaultValue: "active",
    },
    slug: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    position: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    deleted: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    deletedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
}, { tableName: "categories", timestamps: true });
exports.default = Category;
