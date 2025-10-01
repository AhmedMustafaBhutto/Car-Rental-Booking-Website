const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema({
    id:{type:Number},
    title:{type:String},
    author:{type:String},
    date:{type:String},
    time:{type:String},
    price:{type:Number},
    imgUrl:{type:String},
    description:{type:String},
    quote:{type:String}
})

module.exports = mongoose.model("Blogs",blogsSchema,'blogs');