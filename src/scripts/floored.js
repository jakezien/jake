Header = require('./header')

var Floored = {
  controller: function(){
    console.log(m.route.param('section'));
    return {section:m.route.param('section')};
  },
  view: function(ctrl) {
    return m('section', [
      m.component(Header),
      m('h1', ctrl.section)
    ])
  }
};

module.exports = Floored;
