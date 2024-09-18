const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/postgresql.config');
const User = require('./user.model');

const Chat = sequelize.define('Chat', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    userId1: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
    userId2: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
}, {
    tableName: 'chats',
    timestamps: false
});

module.exports = Chat;
