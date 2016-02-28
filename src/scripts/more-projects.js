var More = {
  view: function(ctrl) {
    return m('section', [
      m('h1', 'More Projects'),
      m('div', [
        m('h2', 'MAPS'),
        m('p', 'Email template design and development, illustration, and more.'),
      ]),
      m('div', [
        m('h2', 'Points'),
        m('p', 'Faculty-award-winning undergrad thesis.'),
      ]),
      m('div', [
        m('h2', 'Pivot Power'),
        m('p', 'The idea behind Quirky’s iconic, bestselling product.'),
      ]),
      m('div', [
        m('h2', 'Stamped'),
        m('p', 'Ground-level UI design for a social iOS app.'),
      ]),
      m('div', [
        m('h2', 'Old stuff'),
        m('p', 'A bunch of miscellaneous old student work.'),
      ]),
    ])
  }
};

module.exports = More;
