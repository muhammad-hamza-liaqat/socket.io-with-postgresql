const { connectToDatabase } = require("./postgresql.config");
const associationDefined = require("./association");
const http = require("http");
const socketIo = require("socket.io");
const { initializeSocketIo } = require("./socket.config");
const setupSocketHandlers = require("../utils/socket.io/socket.handler");

const startServer = async (app) => {
    try {
        const DbConnection = await connectToDatabase();
        associationDefined()

        const server = http.createServer(app);
        const io = initializeSocketIo(server);
        setupSocketHandlers(io);
        server.listen(process.env.PORT, () => {
            console.warn(`server is running at http://localhost:${process.env.PORT}/`)
        })
    } catch (error) {
        console.error("Failed to start the server", error.message);
        process.exit(1);
    }
}

module.exports = startServer;