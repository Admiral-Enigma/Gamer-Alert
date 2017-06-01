var socket = io()
var gotLoadout = false

window.onload = function () {
  socket.emit('yo')
  socket.on('loadout', function (loadout) {
    if (!gotLoadout) {
      ui.constructUiFromLoadout(loadout)
    }
    gotLoadout = true

  })
}
