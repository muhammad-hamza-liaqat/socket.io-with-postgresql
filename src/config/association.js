const { sequelize } = require("./postgresql.config");
const User = require("../models/user.model");
const Chat = require("../models/chat.model");
const Message = require("../models/messages.model");

const associationDefined = () => {

    // user, chat
    User.hasMany(Chat, { foreignKey: 'userId1' });
    User.hasMany(Chat, { foreignKey: 'userId2' });

    // chat, user
    Chat.belongsTo(User, { as: 'User1', foreignKey: 'userId1' });
    Chat.belongsTo(User, { as: 'User2', foreignKey: 'userId2' });
    Chat.hasMany(Message, { foreignKey: 'chatId' });

    // message, chat
    Message.belongsTo(Chat, { foreignKey: 'chatId' });
    Message.belongsTo(User, { as: 'Sender', foreignKey: 'senderId' });
}

module.exports = associationDefined;
