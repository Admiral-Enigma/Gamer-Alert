var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

const PORT = Number(process.env.PORT || 3000)

var loadout = {
  title: "Alexander's Dørklokke",
  buttons: [
    {
      name: "Der er mad!",
      color: "success",
      signal: "foodButtonSignal"
    },
    {
      name: "Banke på!",
      color: "success",
      signal: "knockknockButtonSignal"
    },
    {
      name: "Test1",
      color: "success",
      signal: "test1ButtonSignal"
    },
    {
      name: "Test2",
      color: "success",
      signal: "test2ButtonSignal"
    },
    {
      name: "Test3",
      color: "success",
      signal: "test3ButtonSignal"
    },
    {
      name: "Test4",
      color: "success",
      signal: "test4ButtonSignal"
    }
  ]
}

io.on('connection', function (socket) {
    socket.on('yo', function () {
      console.log('User connected!!!!');
      io.emit('loadout', loadout)
    })
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/static/index.html')
})

app.get('/gui', function (req, res) {
  res.sendFile(__dirname + '/static/receiver.html')
})

app.use('/', express.static(__dirname + '/static'))

http.listen(PORT, function () {
  console.log('Server running on port '+PORT);
})
