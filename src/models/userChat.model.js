const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/postgresql.config');

const UserChats = sequelize.define('UserChats', {
    userId: {
        type: DataTypes.UUID,
        references: {
            model: 'users',
            key: 'id',
        },
        allowNull: false,
    },
    chatId: {
        type: DataTypes.UUID,
        references: {
            model: 'chats',
            key: 'id',
        },
        allowNull: false,
    },
}, {
    tableName: 'user_chats',
    timestamps: false,
});

module.exports = UserChats;
