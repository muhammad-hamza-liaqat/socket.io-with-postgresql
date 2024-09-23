const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/postgresql.config');
const User = require('./user.model');

const Chat = sequelize.define('Chat', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    participants: {
        type: DataTypes.ARRAY(DataTypes.UUID),
        allowNull: false,
        validate: {
            len: [2, 2],
        },
    },
}, {
    tableName: 'chats',
    timestamps: false,
});

module.exports = Chat;
