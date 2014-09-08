var Vue = require('vue');
var utils = require('../../libs/utils');
var Home = Vue.extend({
  template: require('./index.html'),
  data: {
    roomName: null
  },
  methods: {
    onGoRoomBtnClick: function() {
      if (utils.checkBlankStr(this.roomName)) {
        alert('Please input any room name');
        return;
      }
      location.href = "#/rooms/"+this.roomName;
    }
  }
});
module.exports = Home;
