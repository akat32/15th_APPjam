var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/MCmong2');
mongoose.Promise = global.Promise;

var GroupSchema = mongoose.Schema({
  multiple_choice : [{
    subject : {type : String},
    question : {type : String},
    name : {type : String},
    answer : {type : String},
    example1 : {type : String},
    example2 : {type : String},
    example3 : {type : String},
    example4 : {type : String},
    example5 : {type : String}
  }],
  short_answer : [{
    subject : {type : String},
    question : {type : String},
    name : {type : String},
    answer : {type : String}
  }],
  group_id : {type : String},
  D_day : {type : String},
  randomNum : {type : Number},
  num : {type : Number},
  fcm_key : [{
    key : {type : String}
  }]
});

var SoloSchema = mongoose.Schema({
  multiple_choice : [{
    subject : {type : String},
    question : {type : String},
    answer : {type : String},
    example1 : {type : String},
    example2 : {type : String},
    example3 : {type : String},
    example4 : {type : String},
    example5 : {type : String}
  }],
  short_answer : [{
    subject : {type : String},
    question : {type : String},
    answer : {type : String}
  }],
  group_id : {type : String},
  D_day : {type : String},
  randomNum : {type : Number},
  num : {type : Number, default:0},
  fcm_key : [{
    key : {type : String}
  }]
});


Group = mongoose.model("group", GroupSchema);
Solo = mongoose.model("solo", SoloSchema);

exports.Group = Group;
exports.Solo = Solo;
