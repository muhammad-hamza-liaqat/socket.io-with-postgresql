const setupSocketHandlers = (io) => {
    io.on("connection", (socket) => {
        console.log(`User connected: ${socket.id}`);

        socket.on("private_message", (data) => {

            let parsedData;
            if (typeof data === 'string') {
                console.log("1")
                parsedData = JSON.parse(data);
            }

            const { senderId, receiverId, message } = parsedData;

            if (typeof senderId !== 'string' || typeof receiverId !== 'string' || typeof message !== 'string' ||
                !senderId.trim() || !receiverId.trim() || !message.trim()) {
                console.error('Invalid message payload after parsing:', { senderId, receiverId, message });
                return;
            }

            console.log(`Message from ${senderId} to ${receiverId}: ${message}`);

            io.to(receiverId).emit("private_message", { senderId, message });
        });

        socket.on("disconnect", () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });
};

module.exports = setupSocketHandlers;
