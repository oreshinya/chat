module.exports = {
  dispatcher: null,
  init: function() {
    this.dispatcher = new WebSocketRails("ancient-ridge-5202.herokuapp.com/websocket");
    this.channel = null;
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
  },

  getStatus: function(opts) {
    this.dispatch("rooms.status", opts);
  },

  subscribe: function(channelName) {
    this.unsubscribe();
    this.channel = this.dispatcher.subscribe(channelName);
  },

  unsubscribe: function() {
    if (this.channel) {
      this.dispatcher.unsubscribe(this.channel.name);
    }
    this.channel = null;
  }
};
