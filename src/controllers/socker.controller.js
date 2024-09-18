const { getSocketIo } = require("../config/socket.config");
const { HTTPResponse } = require("../helpers/response");
const statusCodes = require("http-status-codes")

const createChat = async (req, res) => {
    const { senderId, receiverId, message } = req.body;
    const io = getSocketIo();
    io.to(receiverId).emit("private_message", { senderId, message });
    let response = new HTTPResponse("chat created and message sent", statusCodes.CREATED)
    return res.status(statusCodes.CREATED).json(response)
}

module.exports = { createChat }