var controller = require('./controller.js');
var bodyParser = require('body-parser');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.route('/stairs').post(controller.stairs);

app.listen(port);

console.log('API server started on: ' + port);
