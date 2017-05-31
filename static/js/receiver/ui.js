document.addEventListener('DOMContentLoaded', function () {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
})
function notifyMe() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.');
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('DER ER MAD!!!', {
      icon: 'https://yt3.ggpht.com/-nnJWEdGL7nY/AAAAAAAAAAI/AAAAAAAAAAA/8MRA-w92Gyo/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
      body: "Der er mad Alexander!!!",
    });

    notification.onclick = function () {
      window.open("http://stackoverflow.com/a/13328397/1269037");
    };

  }
}

notifyMe()
