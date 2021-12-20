const bodyParser = require('body-parser');
const express = require('express'); //CommonJS
const allowCors = require('./cors');

const PORT = 3003;

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(PORT, ()=> {
    console.log(`Server is running op port ${PORT}`);
});

module.exports = server;