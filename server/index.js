// import express framework
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var Ratings = require('../seed.js');
// mongoose.connect('mongodb://localhost:27017/ratings',{ useNewUrlParser: true, useUnifiedTopology: true });

const fake = require("./fakeData.js")

// Set PORT# to listen on
const PORT = 3050;

// create server
const app = express();

// serve static client file
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Test GET handler
// app.get('/', (req,res) => {res.sendStatus(418)});

function getStuff(cb) {
    Ratings.find({}).exec(cb);
}

//Gets fake data for development
app.get('/test', (req,res) => {
    console.log("Getting in server")
    res.send(fake);
});

//Gets 'real' data from database
app.get('/ratings', (req,res) => {
    getStuff((err, result)=>{
        res.send(result);
    });
});

// start server
app.listen(PORT, () => console.log('Express server started on', PORT));