const express = require("express");

const server = express();


server.get("/", (req, res)=> {
    // a server can only give one response at a time
    res.json({message: "Hello Worlds!"});

    // that is why this line returns an error
    // res.send("Hello Universe!");
})

server.listen(8080, ()=> {
    console.log("The server is running at PORT 8080");
})

