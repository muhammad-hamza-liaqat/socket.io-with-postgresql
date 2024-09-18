const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/postgresql.config");
const User = require("./user.model");

const Chat = sequelize.define('Chat', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId1: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
    userId2: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
}, {
    tableName: 'chats',
    timestamps: true,
});

module.exports = Chat;