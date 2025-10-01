const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    id:{type:Number},
    brand:{type:String},
    rating:{type:Number},
    carName:{type:String},
    imgUrl:{type:String},
    model:{type:String},
    price:{type:Number},
    speed:{type:String},
    gps:{type:String},
    seatType:{type:String},
    automatic:{type:String},
    description:{type:String}
})

module.exports = mongoose.model("Cars",carSchema,'cars');