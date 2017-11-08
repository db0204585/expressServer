//David Blacksher 
//Express Server in class
//November 8, 2017
//Markley

var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/about.html'));
});
 
app.listen(3000);
