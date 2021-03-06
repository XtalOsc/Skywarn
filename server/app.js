var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = process.env.PORT || 9001;

app.use(bodyParser.json());

//model
var Skywarn = require('../models/model.js');

//connect to mongoDB
mongoose.connect("mongodb://localhost:27017/skywarnApp");

//spin up server
app.listen(port, function(){
  console.log('listening on port ',port);
});

//base url hit
app.get( '/', function(req,res){
  console.log('base url');
  res.sendFile( path.resolve('public/index.html'));
});//end base url hit

app.use( express.static('public'));

//add report to database
app.post('/addReport', function(req,res){
  console.log('in addReport');
  var newReport = new Skywarn({
    skywarn_id: req.body.skywarn_id,
    callsign: req.body.callsign,
    current_location: req.body.current_location,
    weather_condition: req.body.weather_condition,
    additional_information: req.body.additional_information,
    time: Date()
  });//end newReport

  newReport.save(function(err){
    if(err){
      console.log('error occured:', err);
      res.sendStatus(500);
    }//end if
    else{
      res.sendStatus(201);
    }//end else
  });//end newReport.save
});//end addReport

//view all spotter reports
app.get('/viewAll',function(req,res){
  Skywarn.find({},function(err,skywarnResults){
    if(err){
      console.log('error: ',err);
      res.sendStatus(500);
    }//end if
    else{
      console.log("Skywarn Results",skywarnResults);
      res.send(skywarnResults);
    }//end else
  });//end find
});//end viewAll
