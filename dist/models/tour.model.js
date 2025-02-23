"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_config_1 = require("../config/database.config");
const Tour = database_config_1.sequelize.define("tours", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    title: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(255),
    },
    code: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(10),
    },
    images: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    discount: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    information: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    schedule: {
        type: sequelize_1.DataTypes.TEXT("long"),
    },
    timeStart: {
        type: sequelize_1.DataTypes.DATE,
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    status: {
        type: sequelize_1.DataTypes.STRING(20),
    },
    position: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    slug: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false,
    },
    deleted: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    deletedAt: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    tableName: "tours",
    timestamps: true,
});
exports.default = Tour;
