var socket = io()

window.onload = function () {
  socket.on('newSignal', function (signal) {
    console.log('Got signal: '+ signal);
  })
}
