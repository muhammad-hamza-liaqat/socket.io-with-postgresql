const { getSocketIo } = require("../../config/socket.config");

const setupSocketHandlers = () => {
    const io = getSocketIo();

    io.on("connection", (socket) => {
        console.log(`User connected: ${socket.id}`);

        socket.on("private_message", ({ senderId, receiverId, message }) => {
            console.log(`Message from ${senderId} to ${receiverId}: ${message}`);
            socket.to(receiverId).emit("private_message", { senderId, message });
        });

        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });
};

module.exports = setupSocketHandlers;
