const mongoose = require('mongoose');

const servicesSchema = new mongoose.Schema({
    id:{type:Number},
    title:{type:String},
    icon:{type:String},
    description:{type:String}
})

module.exports = mongoose.model("Services",servicesSchema,'Services');