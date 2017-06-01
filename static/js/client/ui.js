var ui = {
  constructUiFromLoadout: function (loadout) {
    //title
    $('.title').append(
      $('<center><h1>'+ loadout.title +'</h1></center>')
    );
  }
}
