'use strict';

var express = require('express');

var PORT = 8082;

var app = express();
app.get('/', function (req, res) {
  res.send('hello world\n');
});


app.get('/name', function(req, res) {
  res.send("hello name");
});


app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
