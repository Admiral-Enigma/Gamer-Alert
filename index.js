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
      name: "Der er gæster!",
      color: "primary",
      signal: "guestButtonSignal"
    },
    {
      id: Math.floor(Math.random() * 999) + 100,
      name: "Simba vil gerne ind",
      color: "warning",
      signal: "catButtonSignal"
    }
  ]
}

var receiverActions = {
  actions: [
    {
      signal: 'foodButtonSignal',
      title: 'Der er mad!!!',
      icon: 'http://www.tastyburger.com/wp-content/themes/tastyBurger/images/home/img-large-burger.jpg',
      body: 'Der er mad Alexander',
      sound: 'foodSound'
    },
    {
      signal: 'knockknockButtonSignal',
      title: 'Banke Banke på!',
      icon: 'http://i4.mirror.co.uk/incoming/article6251909.ece/ALTERNATES/s615/Man-knocking-on-door.jpg',
      body: 'Der er nogen der banker!!',
      sound: 'knockKnockSound'
    },
    {
      signal: 'guestButtonSignal',
      title: 'Gæster!',
      icon: 'https://s3.amazonaws.com/crowdcontent/crowdblog/guest-tag.jpg',
      body: 'Gæsterne er her Alexander!',
      sound: 'doorBellSound'
    },
    {
      signal: 'catButtonSignal',
      title: 'Simba',
      icon: 'https://vignette1.wikia.nocookie.net/gleethenextgenerationfanfiction/images/5/56/Puss-in-Boots-Big-Eyes.jpg/revision/latest?cb=20120317000707',
      body: 'Simba vil gerne ind!',
      sound: 'catSound'
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
