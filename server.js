var express = require('express');
var bodyparser = require('body-parser');
var http = require('http');
var app = express();

app.use(express.static(__dirname + (process.env.STATIC_DIR || '/build')));

app.use(bodyparser.json());

//this line is in notes, but shouldn't be necessary for mmmapp
//require('./routes/note-routes')(app);

var server = http.createServer(app);

server.listen(process.env.PORT || 3000, function() {
  console.log('server running on port 3000');
});
