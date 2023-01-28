const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3000
mongoose.set('strictQuery',false);


const mongooose =require('mongoose');
const laundeSchema =mongooose.Schema({
    Name:String,
    Description:String,
    age:Number
    
});

const laundeModel=mongooose.model('/',laundeSchema);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/vehicles/add',(req,res)=>{
    res.send("Data of Vehicles is saved!");
  });
  
  app.get('/vehicle/list',(req,res)=>{
      res.send('list created!')
  });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})