var express = require('express');
var bodyParser = require("body-parser");

var app = express();

const port=process.env.PORT || 3000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var conversations = [];

app.get('/', function (req, res,next) {
  res.send(conversations);
});



app.post('/', function(req, res, next) {
  var newMessage = {
  	user : req.body.username,
  	mess : req.body.message,
  	time : req.body.time
  };
  conversations.push(newMessage);
  
  res.json({
  	success: true
  });
  
});



app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});