var bodyParser = require('body-parser');
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use(bodyParser.json())

app.listen(port);

console.log('API server started on: ' + port);
