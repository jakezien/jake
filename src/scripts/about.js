var Header = require('./header')

var About = {
  view: function(ctrl) {
    return m('div', [
      m.component(Header),
      m('h1', 'About'),
      m('p', 'I’m Jake Zien, a very silly boy.')
    ])
  }
};

module.exports = About
