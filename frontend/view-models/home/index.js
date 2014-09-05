var Vue = require('vue');
var Home = Vue.extend({
  template: require('./index.html'),
  data: {
    roomName: null
  },
  methods: {
    onGoRoomBtnClick: function() {
      if (this.isEmptyRoomName()) {
        alert('Please input any room name');
        return;
      }
      location.href = "#/rooms/"+this.roomName;
    },
    isEmptyRoomName: function() {
      return (!this.roomName || this.roomName.trim() === "");
    }
  }
});
module.exports = Home;
