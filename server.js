const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const countryRouter = require("./data/countryRouter");
const authRouter = require("./data/auth/authRouter");
const questionsRouter = require("./data/questions/questionsRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api",countryRouter);
server.use("/api/auth",authRouter);
server.use("/api/restricted",questionsRouter);

module.exports = server;