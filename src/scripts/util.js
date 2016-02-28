util = {}

util.mlink = function (href, content){
  return m('a[href="'+href+'"]', {config: m.route}, content);
}

module.exports = util
