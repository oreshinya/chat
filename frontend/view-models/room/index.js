var Vue = require('vue');
var utils = require('../../libs/utils');
var observer = require('../../observer');
var Room = Vue.extend({
  template: require('./index.html'),
  data: {
    roomName: null,
    loaded: false,
    occurredConnectionError: false,
    connectCount: null
  },
  methods: {

    connect: function() {
      if (utils.checkBlankStr(this.roomName)) {
        return;
      }
      observer.connectRoom({
        params: {roomName: this.roomName},
        success: $.proxy(this.onConnectSuccess, this),
        error: $.proxy(this.onConnectError, this)
      });
    },

    onConnectSuccess: function() {
      this.loaded = true;
      this.occurredConnectionError = false;
    },

    onConnectError: function() {
      this.occurredConnectionError = true;
    }

  }
});
module.exports = Room;
