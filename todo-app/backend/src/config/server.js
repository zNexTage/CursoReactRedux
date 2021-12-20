const bodyParser = require('body-parser');
const express = require('express'); //CommonJS

const PORT = 3003;

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(PORT, ()=> {
    console.log(`Server is running op port ${PORT}`);
});