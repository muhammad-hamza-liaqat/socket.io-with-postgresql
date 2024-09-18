const { getSocketIo } = require("../../config/socket.config");

// const setupSocketHandlers = () => {
//     const io = getSocketIo();

//     io.on("connection", (socket) => {
//         console.log(`User connected: ${socket.id}`);

//         socket.on("private_message", ({ senderId, receiverId, message }) => {
//             console.log(`Message from ${senderId} to ${receiverId}: ${message}`);
//             socket.to(receiverId).emit("private_message", { senderId, message });
//         });

//         socket.on("disconnect", () => {
//             console.log(`User disconnected: ${socket.id}`);
//         });
//     });
// };

// module.exports = setupSocketHandlers;

// ----------------------------------------------------------------------- //
    // setupSocketHandlers will handle the senderID, receiverId and message.
    // added additional code for debugging if the payload in string format and then parsed!

const setupSocketHandlers = (io) => {
    io.on("connection", (socket) => {
        console.log(`User connected: ${socket.id}`);

        socket.on("private_message", (data) => {
            // console.log("Full received payload (data):", data);

            let parsedData;
            try {
                if (typeof data === 'string') {
                    parsedData = JSON.parse(data);  
                } else {
                    parsedData = data;  
                }
            } catch (err) {
                console.error('Error parsing message payload:', err);
                return;
            }

            const { senderId, receiverId, message } = parsedData;

            // console.log(`senderId: ${senderId}, receiverId: ${receiverId}, message: ${message}`);
            // console.log(`Type of senderId: ${typeof senderId}, Type of receiverId: ${typeof receiverId}, Type of message: ${typeof message}`);

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
