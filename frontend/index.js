var Router = require("director").Router;
var observer = require("./observer");

$(document).ready(function(){
  observer.init();

  var routes = {
    "/": require('./route-actions/go-home'),
    "/rooms/:roomName": require('./route-actions/go-room')
  };
  var router = new Router(routes);
  router.init();

  if (location.hash === "") {
    location.href = "#/";
  }

});
