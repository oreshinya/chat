var Home = require('./home/index.js');

$(document).ready(function(){
  var homeVM = new Home();
  homeVM.$appendTo("#app");
});
