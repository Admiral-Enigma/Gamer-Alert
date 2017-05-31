var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

const PORT = Number(process.env.PORT || 3000)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/static/index.html')
})

app.use('/', express.static(__dirname + '/static'))

http.listen(PORT, function () {
  console.log('Server running on port 2000');
})
