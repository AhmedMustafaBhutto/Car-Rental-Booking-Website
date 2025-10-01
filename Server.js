const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require('cors');
const  Product = require('./models/Product');
const Cars = require("./models/Cars");
const Blogs = require("./models/Blogs");
const Services = require("./models/Services");
const app = express();
app.use(cors());

// static files
app.use(express.static('public'))


//mongo atlas connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser:true, useUnifiedTopology:true });
const connection = mongoose.connection;
connection.once('open',()=>{ 
    console.log("Conneted to MongoAtlas Successfully.") 
})
.on('error',()=>{ 
    console.log("Mongo Atlas Connection Declined") 
})


app.get("/products",async(req,res,next)=>{
    let products;
    try{
        products = await Product.find();
        console.log(products);  
    }catch(error){
        console.log("Something wents wrong")
    }
    res.json(products);
});

app.get("/cars",async(req,res,next)=>{
    let cars;
    try{
        cars = await Cars.find();
    }catch(error){
        console.log("Something wents wrong")
    }
    res.json(cars);
})

app.get("/blogs",async(req,res,next)=>{
    let blogs;
    try{
        blogs = await Blogs.find();
    }catch(error){
        console.log("Something wents wrong")
    }
    res.json(blogs);
})


app.get("/services",async(req,res,next)=>{
    let services;
    try{
        services = await Services.find();
    }catch(error){
        console.log("Something wents wrong")
    }
    res.json(services);
})



app.listen(5000,()=>{
    console.log("Server is listening on port 5000")
})