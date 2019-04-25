var express = require('express');

var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

var bodyParser = require("body-parser");
var app = express();
const port=process.env.PORT || 3000
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/uploads'));


var conversations = [];

var name;



app.post('/', upload.single('slika'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any

  name = req.file.path;
  res.send({
  	file: req.file
  });
});


app.get('/',function(req,res,next){

	var put = __dirname + "/" + name;
	res.sendFile(put);
  	res.end();

});

/*

app.get('/', function (req, res,next) {
  res.send(conversations);
});

*/


/*
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

*/


app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});