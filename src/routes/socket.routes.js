const express = require("express");
const { catchAsyncErrors } = require("../helpers/tryCatch");
const { createChat } = require("../controllers/socker.controller");
const socketRoutes = express.Router();

socketRoutes.get("/create-chat", catchAsyncErrors(createChat));

module.exports = socketRoutes