const todo = require('./model');

todo.methods(['get', 'post', 'put', 'delete']);
todo.updateOptions({ new: true, runValidators: true });

module.exports = todo;