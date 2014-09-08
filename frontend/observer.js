module.exports = {
  dispatcher: null,
  init: function() {
    this.dispatcher = new WebSocketRails("localhost:3000/websocket");
  },
  connectRoom: function(opts) {
    opts = opts || {};
    opts.params = opts.params || {};
    opts.success = opts.success || function(){};
    opts.error = opts.error || function(){};

    this.dispatcher.trigger(
        "rooms.create", opts.params, opts.success, opts.error);
  }
};
