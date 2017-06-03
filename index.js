var express = require('express')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

const PORT = Number(process.env.PORT || 3000)

var loadout = {
  title: "Alexander's Dørklokke",
  buttons: [
    {
      id: Math.floor(Math.random() * 999) + 100,
      name: "Der er mad!",
      color: "success",
      signal: "foodButtonSignal"
    },
    {
      id: Math.floor(Math.random() * 999) + 100,
      name: "Banke Banke på!",
      color: "danger",
      signal: "knockknockButtonSignal"
    },
    {
      id: Math.floor(Math.random() * 999) + 100,
      name: "Test1",
      color: "primary",
      signal: "test1ButtonSignal"
    },
    {
      id: Math.floor(Math.random() * 999) + 100,
      name: "Test2",
      color: "warning",
      signal: "test2ButtonSignal"
    },
    {
      id: Math.floor(Math.random() * 999) + 100,
      name: "Test3",
      color: "danger",
      signal: "test3ButtonSignal"
    },
    {
      id: Math.floor(Math.random() * 999) + 100,
      name: "Test4",
      color: "royal",
      signal: "test4ButtonSignal"
    }
  ]
}

var receiverActions = {
  actions: [
    {
      signal: 'foodButtonSignal',
      title: 'FOOOOOOOD',
      icon: '',
      body: 'Der er mad Alexander',
      sound: 'foodSound'
    },
    {
      signal: 'knockknockButtonSignal',
      title: 'Banke Banke på!',
      icon: 'http://i4.mirror.co.uk/incoming/article6251909.ece/ALTERNATES/s615/Man-knocking-on-door.jpg',
      body: 'Der er mad Alexander',
      sound: 'knockKnockSound'
    },
    {
      signal: 'test1ButtonSignal',
      title: 'TEST 1',
      icon: 'https://static.comicvine.com/uploads/original/11/119238/5230235-ricksanchez.jpg',
      body: 'Der er mad Alexander',
      sound: 'test1Sound'
    },
    {
      signal: 'test2ButtonSignal',
      title: 'TEST 2',
      icon: 'https://vignette4.wikia.nocookie.net/rickandmorty/images/e/ef/Vlcsnap-2015-01-31-02h46m26s111.png/revision/latest?cb=20150131104650',
      body: 'Der er mad Alexander',
      sound: 'test2Sound'
    }
  ]
}

io.on('connection', function (socket) {
    io.emit('receiverActions', receiverActions)

    socket.on('yo', function () {
      console.log('User connected!!!!')
      io.emit('loadout', loadout)
    })

    socket.on('signal', function (signal) {
      console.log('Got signal '+ signal);
      io.emit('newSignal', signal)
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
