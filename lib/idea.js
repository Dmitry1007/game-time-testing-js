const $ = require('jquery');

function Idea(data) {
  this.title = data.title;
  this.body  = data.body;
}

module.exports = Idea;

Idea.prototype.render = function() {
  return $(`<div><h2>${this.title}</h2></div>`);
}
