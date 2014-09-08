var Room = require('../view-models/room/index');

module.exports = function(roomName) {
  $("#app").empty();
  var roomVM = new Room();
  roomVM.roomName = roomName;
  roomVM.$appendTo("#app");
  roomVM.connect();
};
