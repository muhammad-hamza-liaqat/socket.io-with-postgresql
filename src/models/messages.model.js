const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/postgresql.config');
const User = require('./user.model');
const Chat = require('./chat.model');

const Message = sequelize.define('Message', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    chatId: {
        type: DataTypes.UUID,
        references: {
            model: Chat,
            key: 'id',
        },
        allowNull: false,
    },
    content: {
        type: DataTypes.JSONB, 
        allowNull: false,
    },
}, {
    tableName: 'messages',
    timestamps: false
});

module.exports = Message;
