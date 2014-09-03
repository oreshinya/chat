var Vue = require('vue');
var fs = require('fs');

var Home = Vue.extend({
  template: fs.readFileSync(__dirname+"/index.html", "utf-8")
});

module.exports = Home;
