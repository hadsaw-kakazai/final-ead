const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const receipe = require('./model/receipeSchema');
var cors = require('cors');
const port = 5000;

mongoose.connection("mongodb://127.0.0.1:27017/receipe")
app.use(express.urlencoded({ extended: true }));


app.use(cors());

app.post("/api/endpoint", async (req,res)=>{
    
   await console.log(req.body)
})

app.listen(port, function(){
    console.log("Server is running on port 3000");
})