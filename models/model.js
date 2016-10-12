console.log("in model.js");
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var skywarnReportSchema = new Schema({
  skywarn_id: Number,
  callsign: String,
  current_location: String,
  weather_condition: Object,
  additional_information: String,
  time: String
});

var Skywarn = mongoose.model('skywarn', skywarnReportSchema);

module.exports = Skywarn;
