const { sequelize } = require("./postgresql.config");
const User = require("../models/user.model");
const Chat = require("../models/chat.model");
const Message = require("../models/messages.model");

const associationDefined = () => {


    User.hasMany(Message, { foreignKey: 'senderId' });
    Message.belongsTo(User, { foreignKey: 'senderId' });

    Chat.hasMany(Message, { foreignKey: 'chatId' });
    Message.belongsTo(Chat, { foreignKey: 'chatId' });

    User.belongsToMany(Chat, { through: 'UserChats', foreignKey: 'userId' });
    Chat.belongsToMany(User, { through: 'UserChats', foreignKey: 'chatId' });

};

module.exports = associationDefined;
