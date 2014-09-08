var Router = require("director").Router;
var connection = require("./connection");

$(document).ready(function(){
  connection.init();

  var routes = {
    "/": require('./route-actions/go-home'),
    "/rooms/:roomName": require('./route-actions/go-room')
  };
  var router = new Router(routes);
  router.configure({
    on: $.proxy(connection.unsubscribe, connection)
  });
  router.init();

  if (location.hash === "") {
    location.href = "#/";
  }

});
