const { connectToDatabase } = require("./postgresql.config");
const associationDefined = require("./association");
const http = require("http");
const socketIo = require("socket.io");

const startServer = async (app) => {
    try {
        const DbConnection = await connectToDatabase();
        associationDefined()

        // io.on('connection', (socket) => {
        //     console.log('New user connected:', socket.id);

        //     socket.on('register', (userId) => {
        //         users[userId] = socket.id;
        //         console.log(`User ${userId} registered with socket ID ${socket.id}`);
        //     });

        //     socket.on('private_message', async ({ senderId, receiverId, chatId, content }) => {
        //         try {
        //             const chat = await Chat.findByPk(chatId);
        //             if (!chat) {
        //                 socket.emit('error_message', `Chat with ID ${chatId} does not exist`);
        //                 return;
        //             }

        //             const message = await Message.create({
        //                 chatId,
        //                 senderId,
        //                 content,
        //             });

        //             const receiverSocketId = users[receiverId];
        //             if (receiverSocketId) {
        //                 io.to(receiverSocketId).emit('private_message', {
        //                     senderId,
        //                     content,
        //                     timestamp: message.createdAt,
        //                 });
        //             } else {
        //                 socket.emit('error_message', `User ${receiverId} is not connected`);
        //             }
        //         } catch (error) {
        //             console.error('Error sending message:', error);
        //             socket.emit('error_message', 'Failed to send message');
        //         }
        //     });

        //     socket.on('disconnect', () => {
        //         console.log('User disconnected:', socket.id);
        //         for (let userId in users) {
        //             if (users[userId] === socket.id) {
        //                 delete users[userId];
        //                 break;
        //             }
        //         }
        //     });
        // });


        app.listen(process.env.PORT, () => {
            console.warn(`server is running at http://localhost:${process.env.PORT}/`)
        })
    } catch (error) {
        console.error("Failed to start the server", error.message);
        process.exit(1);
    }
}

module.exports = startServer;