var Vue = require('vue');
var utils = require('../../libs/utils');
var connection = require('../../connection');

var Room = Vue.extend({
  template: require('./index.html'),

  data: {
    roomName: null,
    loaded: false,
    occurredConnectionError: false,
    sendPostError: false,
    connectCount: null,
    tmpPost: null,
    subscribersCount: "---",
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

      this.subscribePosts();
      this.subscribeStatus();
    },

    onConnectError: function(error) {
      this.occurredConnectionError = true;
      if (error.statusCode === 1) {
        alert('reached member limit.');
        location.href = "#/";
      }
    },

    subscribePosts: function() {
      connection.subscribe(this.roomName);
      connection.channel.bind("new_post", $.proxy(this.onNewPost, this));
    },

    subscribeStatus: function() {
      this.getStatus();
      connection.channel.bind("subscriber_part", $.proxy(this.getStatus, this));
      connection.channel.bind("subscriber_join", $.proxy(this.getStatus, this));
    },

    getStatus: function() {
      connection.getStatus({
        params: {room_name: this.roomName},
        success: $.proxy(this.onGetStatusSuccess, this)
      });
    },

    onGetStatusSuccess: function(roomStatus) {
      this.subscribersCount = roomStatus.subscribersCount;
    },

    onNewPost: function(post) {
      this.posts.unshift(post);
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

    onSendPostSuccess: function() {
      this.sendPostError = false;
      this.tmpPost = null;
    },

    onSendPostError: function() {
      this.sendPostError = true;
    }

  }

});

module.exports = Room;
