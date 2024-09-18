const express = require("express");
const app = express();
require("dotenv").config();
const startServer = require("./config/server.config");
const socketRoutes = require("./routes/socket.routes");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// server
startServer(app);
