const http = require("http");
const socketIo = require("socket.io");

let io;

const initializeSocketIo = (server) => {
    io = socketIo(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    return io;
};

const getSocketIo = () => io;

module.exports = { initializeSocketIo, getSocketIo };
