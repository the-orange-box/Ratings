const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var Ratings = require('../seed.js');
mongoose.connect('mongodb://localhost:27017/ratings',{ useNewUrlParser: true, useUnifiedTopology: true });

const fake = require("./fakeData.js")
const PORT = 3002;
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/:placeid', express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Test GET handler
// app.get('/', (req,res) => {res.sendStatus(418)});

function getStuff(placeId,cb) {
    Ratings.find({placeId}).exec(cb);
}

//Gets fake data for development
app.get('/test/test', (req,res) => {
    console.log("Getting in server")
    res.send(fake);
});

//Gets 'real' data from database
app.get('/ratings/:placeid', (req,res) => {
    getStuff(req.params.placeid, (err, result)=>{
        res.send(result);
    });
});

app.listen(PORT, () => console.log('Express server started on', PORT));