const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    Name : {
        type : String,
        required : true
    }, 
    Color : {
        type : String,
        required : true
    }, 
    Size : {
        type : String,
        required : true
    }, 
    Price : {
        type : Number,
        required : true
    }, 
    Stock : {
        type : Boolean,
        required : true
    }, 
    Image : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('Items', ItemSchema)