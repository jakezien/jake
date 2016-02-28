require('./util')

var Featured = {
  view: function(ctrl) {
    return m('section', [
      m('h1', 'Featured Projects'),
      m('div', [
        m('h2', 'Floored'),
        m('p', 'As lead designer of Floored, I have done identity design, UX and UI, copywriting, and front-end development.'),
        util.mlink('/floored/identity', [
          m('h3', 'Identity Design'),
          m('p', 'The definition and three-year evolution of Floored’s brand.'),
        ]),
        util.mlink('/floored/ux', [
          m('h3', 'User Experience Design'),
          m('p', 'A case study in defining and designing a complex, data-heavy workflow.'),
        ]),
        util.mlink('/floored/more', [
          m('h3', 'More'),
          m('p', 'More UI and web design for Floored.'),
        ]),
      ]),
      m('div', [
        m('h2', 'Willka Yachay'),
        m('p', 'Identity and web design/development for an educational nonprofit based in Peru.'),
      ]),
      m('hr')
    ])
  }
};

module.exports = Featured;
