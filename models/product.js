var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({

    mainImagePath: {type: String, required: true},
    secondImagePath: {type: String, required: true},
    thirdImagePath: {type: String, required: true},
    fourthImagePath: {type: String, required: true},
    title: {type: String, required: true},
        description: {type: String, required: true},
        price: {type: Number, required: true}
});

module.exports = mongoose.model('Product', schema);