const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const countryRouter = require("./data/countryRouter");
const authRouter = require("./data/auth/authRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api",countryRouter);
server.use("/api/auth",authRouter);

module.exports = server;