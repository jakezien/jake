var Header = require('./header')
// var Intro = require('./blog-intro')
var PostIterator = require('./post-iterator.js')

var Blog = {
  view: function(ctrl) {
    return m('div', [
      m.component(Header),
    ])
  }
};

module.exports = Blog;
