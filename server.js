const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const countryRouter = require("./data/countryRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api",countryRouter);

module.exports = server;