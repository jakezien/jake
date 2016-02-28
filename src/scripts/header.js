require('./util')

var Header = {
  view: function(ctrl) {
    return m('div', [
      m('nav', [
        util.mlink('/', 'Home'),
        util.mlink('/about', 'About'),
        util.mlink('/blog', 'Blog')
      ])
    ])
  }
};

module.exports = Header;
