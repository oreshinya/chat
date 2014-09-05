var Router = require("director").Router;

$(document).ready(function(){
  var routes = {
    "/": require('./route-actions/go-home'),
    "/rooms/:roomName": require('./route-actions/go-room')
  };
  var router = new Router(routes);
  router.init();

  location.href = "#/";
});
