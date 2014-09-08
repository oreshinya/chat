module.exports = {
  dispatcher: null,
  init: function() {
    this.dispatcher = new WebSocketRails("localhost:3000/websocket");
  },

  dispatch: function(evt, opts) {
    opts = opts || {};
    opts.params = opts.params || {};
    opts.success = opts.success || function(){};
    opts.error = opts.error || function(){};

    this.dispatcher.trigger(
        evt, opts.params, opts.success, opts.error);
  },

  connectRoom: function(opts) {
    this.dispatch("rooms.create", opts);
  },

  sendPost: function(opts) {
    this.dispatch("rooms.create_post", opts);
  }
};
