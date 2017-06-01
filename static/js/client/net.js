var socket = io()
var gotLoadout = false
var net = {
  sendSignal: function (signal) {
    console.log('Sending signal '+ signal);
    socket.emit('signal', signal)
  }
}
window.onload = function () {
  socket.emit('yo')
  socket.on('loadout', function (loadout) {
    if (!gotLoadout) {
      ui.constructUiFromLoadout(loadout)
    }
    gotLoadout = true
  })
  ui.loadSounds()
}
