var Vue = require('vue');
var utils = require('../../libs/utils');
var connection = require('../../connection');
var Room = Vue.extend({
  template: require('./index.html'),
  data: {
    roomName: null,
    loaded: false,
    occurredConnectionError: false,
    connectCount: null,
    tmpPost: null,
    posts: []
  },
  methods: {

    connect: function() {
      if (utils.checkBlankStr(this.roomName)) {
        return;
      }
      connection.connectRoom({
        params: {room_name: this.roomName},
        success: $.proxy(this.onConnectSuccess, this),
        error: $.proxy(this.onConnectError, this)
      });
    },

    onConnectSuccess: function(posts) {
      this.loaded = true;
      this.occurredConnectionError = false;
      this.posts = posts;
    },

    onConnectError: function() {
      this.occurredConnectionError = true;
    },

    onPostBtnClick: function() {
      if (utils.checkBlankStr(this.tmpPost)) {
        return;
      }

      connection.sendPost({
        params: {room_name: this.roomName, tmp_post: this.tmpPost},
        success: $.proxy(this.onSendPostSuccess, this),
        error: $.proxy(this.onSendPostError, this),
      });
    },

    onSendPostSuccess: function(post) {
      this.posts.push(post);
      this.tmpPost = null;
    },

    onSendPostError: function() {
      alert('hogeeeeeeee');
    }

  }
});
module.exports = Room;
