const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Remove a advertência de depreciação do mongoose

module.exports = mongoose.connect('mongodb://localhost/todo');