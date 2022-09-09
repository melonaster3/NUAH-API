const { Router } = require('express');
const express = require('express');
const mongoose = require('mongoose')
const app = express();
const Items = require('./model/Post.js')
require('dotenv/config');

//ROUTES 

app.get("/",(req,res) => {
    res.send('We are on home')
});

app.post('/', (req,res) => {
    console.log(req.body);
})

//Connect to DB 

mongoose.connect(process.env.DB_CONNECTION, () => console.log('connected to db'))


// APP LISTEN
app.listen(3001);




