const server = require("./server");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT || 5000;

server.get("*",(req,res) => {
    res.status(200).json("Hello from friend's finder app");
})

server.listen(port,() => {
    console.log("listening on port",port);
})