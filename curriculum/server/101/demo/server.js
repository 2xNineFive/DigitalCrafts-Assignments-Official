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


// This is just an example showing how a function can do only one thing. Similarly, a server can .get one thing at a time. 
function someFunction () {
    // code here
    return someValue;
    // everything here is ignored
}