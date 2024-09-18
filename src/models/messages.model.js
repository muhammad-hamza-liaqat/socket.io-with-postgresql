const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/postgresql.config")
const User = require("./user.model")
const Chat = require("./chat.model")

const Message = sequelize.define('Message', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    chatId: {
        type: DataTypes.INTEGER,
        references: {
            model: Chat,
            key: 'id',
        },
        allowNull: false,
    },
    senderId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    tableName: "messages",
    timestamps: true,
});

module.exports = Message;