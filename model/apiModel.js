var mongoose = require('mongoose');
//This mongoose.schema 
var Schema = mongoose.Schema;
var symbolSchema = new Schema({
    symbol: String,
    name: String,
    date: String,
    isEnabled: Boolean,
    type: String,
    iexID: String
})

//This says that 'Todos' is the name of the Collection and it follows todoSchema
var symbols = mongoose.model('symbols', symbolSchema);
module.exports = symbols;