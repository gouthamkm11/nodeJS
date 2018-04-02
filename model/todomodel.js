var mongoose = require('mongoose');
//This mongoose.schema 
var Schema = mongoose.Schema;
var todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
})

//This says that 'Todos' is the name of the Collection and it follows todoSchema
var Todos = mongoose.model('Todos', todoSchema);
module.exports = Todos;