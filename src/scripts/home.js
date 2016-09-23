var Header = require('./header')
var Intro = require('./home-intro')
var FeaturedProjects = require('./featured-projects')
var MoreProjects = require('./more-projects')

var Home = {
  view: function(ctrl) {
    return m('div.intro', [
      m('p', 'Jake Zien is a designer and developer based in New York City, currently working as lead designer at ', m('a[href="http://www.floored.com"]',  'Floored.') ),
      m('p', [ m('a[href="mailto:jake@jakezien.com"]', 'Get in touch.') ] ),
    ])
  }
};

module.exports = Home;
