var express = require('express')
var app = express()
var server = require('http').Server(app)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/static/index.html')
})

app.use('/', express.static(__dirname + '/static'))
server.listen(2000, function () {
  console.log('Server running on port 2000');
})
