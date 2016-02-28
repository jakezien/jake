var Intro = {
  view: function(ctrl) {
    return m('section', [
      m('h1', 'Whoa'),
      m('h2', 'You found my website!'),
      m('p', 'There are roughly a billion websites on the internet. How fortunate for us both that you found mine.'),
      m('hr')
    ])
  }
};

module.exports = Intro;
