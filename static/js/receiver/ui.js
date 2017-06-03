
var ui = {
  actionLoadOut: null,

  init: function () {
    if (Notification.permission !== "granted")
      Notification.requestPermission();
    //Load sounds
    createjs.Sound.registerSound('../../sounds/receiver/doorKnock.mp3', 'knockKnockSound')
    createjs.Sound.registerSound('../../sounds/receiver/number9.mp3', 'foodSound')

    createjs.Sound.registerSound('../../sounds/receiver/test1.mp3', 'test1Sound')
    createjs.Sound.registerSound('../../sounds/receiver/test2.mp3', 'test2Sound')

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
    else {
      var notification = new Notification(title, {
        icon: icon,
        body: body,
      });
      createjs.Sound.stop();
      createjs.Sound.play(sound)
    }
  }
}
