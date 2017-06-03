var socket = io()
var hasActions = false
window.onload = function () {
  ui.init()

  socket.on('receiverActions', function (actions) {
    if (!hasActions) {
      ui.setUpActions(actions)
      console.log('got actions');
    }
    hasActions = true
  })

  socket.on('newSignal', function (signal) {
    ui.handleSignal(signal)
    console.log('Got signal: '+ signal);
  })
}
