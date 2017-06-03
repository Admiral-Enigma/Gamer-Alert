
var ui = {
  actionLoadOut: null,
  muted: false,
  init: function () {
    if (Notification.permission !== "granted")
      Notification.requestPermission();
    //Load sounds
    createjs.Sound.registerSound('../../sounds/receiver/doorKnock.mp3', 'knockKnockSound')
    createjs.Sound.registerSound('../../sounds/receiver/number9.mp3', 'foodSound')

    createjs.Sound.registerSound('../../sounds/receiver/doorbell.mp3', 'doorBellSound')
    createjs.Sound.registerSound('../../sounds/receiver/lion.mp3', 'catSound')
    $('.mutedStatusText').html('You are not muted')

    $('.muteButton').click(function () {
      if (ui.muted) {
        ui.muted = false
        $('.mutedStatusText').html('You are not muted')
      }else {
        ui.muted = true
        createjs.Sound.stop();
        $('.mutedStatusText').html('You are muted')
      }
    })
  },

  setUpActions: function (actions) {
    this.actionLoadOut = actions;
  },

  handleSignal: function (signal) {
    this.actionLoadOut.actions.forEach(function (action) {
      if (action.signal == signal) {
        ui.notify(action.title, action.icon, action.body, action.sound)
      }
    })
  },

  notify: function (title, icon, body, sound) {
    if (!Notification) {
      alert('Desktop notifications not available in your browser. Try Chromium.');
      return;
    }

    if (Notification.permission !== "granted")
      Notification.requestPermission();
    else{
      if (this.muted != true){
        var notification = new Notification(title, {
          icon: icon,
          body: body,
        });
        createjs.Sound.stop();
        createjs.Sound.play(sound)
      }
    }
  }
}
