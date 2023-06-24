const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const receipe = require('./model/receipe');



const port = 5000;

mongoose.connect("mongodb://127.0.0.1:27017/receipe")
app.use(cors());
app.use(bodyParser.json());


app.post('/api/endpoint', (req, res) => {
    console.log(req.body);
    const newReceipe = new receipe(req.body)
    newReceipe.save().then(()=>{

    r
    }).catch(()=>{
    console.log(err)
  })
  });


 

  app.get("/recepie/get", async (req, res) => {
    const data = await receipe.find();
    res.json(data);
  });
  
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });