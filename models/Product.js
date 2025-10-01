const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id:{type:Number},
    title:{type:String},
    price:{type:Number},
    category:{type:String},
    imgUrl:{type:String},
    description:{type:String}
})

module.exports = mongoose.model("Product",productSchema,'products');