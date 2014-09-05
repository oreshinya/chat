var Vue = require('vue');
var Room = Vue.extend({
  template: require('./index.html'),
  data: {
    roomName: null,
    loaded: false
  }
});
module.exports = Room;
