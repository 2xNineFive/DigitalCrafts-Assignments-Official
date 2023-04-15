const express = require('express');
const cookieParser = require('cookie-parser')

const server = express();

server.use(express.json());
server.use(cookieParser());


server.get('/', (req, res) => {
    res.json({message: 'You are at the root'});
});

server.post('/body', (req, res) => {
    console.log('body', req.body);
    res.json({message: 'You are at the /body'});
});

server.get('/cookies', (req, res) => {
    console.log('cookies', req.cookies);
    res.json({message: 'You are at /cookies'});
});

server.get('/params/:someRoute', (req, res) => {
    console.log('params', req.params);
    res.json({message: 'You are at /params'});
});

server.get('/query/', (req, res) => {
    console.log('query', req.query);
    res.json({message: 'You are at /query'});
});

server.listen(8080, () => {
    console.log('The server is running at port 8080');
});

