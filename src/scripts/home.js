var Header = require('./header')
var Intro = require('./home-intro')
var FeaturedProjects = require('./featured-projects')
var MoreProjects = require('./more-projects')

var Home = {
  view: function(ctrl) {
    return m('div', [
      m.component(Header),
      m.component(Intro),
      m.component(FeaturedProjects),
      m.component(MoreProjects)
    ])
  }
};

module.exports = Home;
