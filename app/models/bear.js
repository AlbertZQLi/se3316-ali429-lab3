// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
    name: String,
    quantity: Number,
    price: Number,
    tax:Number
});

module.exports = mongoose.model('Bear', BearSchema);
