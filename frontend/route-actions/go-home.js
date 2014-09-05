var Home = require('../view-models/home/index');

module.exports = function() {
  $("#app").empty();
  var homeVM = new Home();
  homeVM.$appendTo("#app");
};
