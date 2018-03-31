const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var rndstring = require('randomstring');
var FCM = require('fcm-node');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '1gb', extended: false }));

require('./mongo');

var router = require('./routes/index')(express, Group, Solo, rndstring, FCM);
app.use('/', router);

app.listen(3322, ()=>{
  console.log('Server Porting on 3322');
})
