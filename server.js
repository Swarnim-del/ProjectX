const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3000
mongoose.set('strictQuery',false);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const mongooose =require('mongoose');
const laundeSchema =mongooose.Schema({
    Name:String,
    Description:String,
    age:Number
    
});

const laundeModel=mongooose.model('/',laundeSchema);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

