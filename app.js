"use strict"

var port      = 3333;
var express   = require('express');
var app       = express();
var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;
var bodyParser= require('body-parser');
var moment    = require('moment');
mongoose.connect('mongodb://localhost/niv-landing-page');

var ClientSchema = new Schema({
  name: { type: String, unique: true, default: '' },
  email: { type: String, default: '' },
  time: { type: String, default: moment(new Date()).format('HH:mm:ss') }
});

var Client   = mongoose.model('client', ClientSchema);

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use( bodyParser.urlencoded({extended: false}) ); // to support URL-encoded bodies

app.post('/newClient', function(req, res){ 
  res.setHeader("Access-Control-Allow-Origin", "*");
  saveNewClient(req.body.name, req.body.email);
  res.end();
});

function saveNewClient(name, email){
  console.log("new client:", name, email);
  var newClient = new Client(
    {
      name: name,
      email: email
    }
  );
  newClient.save();
}

app.listen(port, function(){
  console.log('server listening on port ' + port);
});
