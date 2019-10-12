// import express framework
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var Ratings = require('../seed.js');
mongoose.connect('mongodb://localhost:27017/ratings',{ useNewUrlParser: true, useUnifiedTopology: true });


// Set PORT# to listen on
const PORT = 3000;

// create server
const app = express();

// serve static client file
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Test GET handler
app.get('/', (req,res) => {res.sendStatus(418)});

var getStuff = () => {
    db.find()
}

app.get('/ratings', (req,res) => {mongoose.connection.getStuff()});


//Get test movie data
app.get('/test', function (req, res) {
    res.status(200);                        //res.sendStatus(418) also sends body string
    console.log("Server is sending a greeting!");
    res.send([
        {hello: 'Hello World'},
        ])
    }
)

// start server
app.listen(PORT, () => console.log('Express server started on', PORT));