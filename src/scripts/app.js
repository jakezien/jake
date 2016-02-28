m = require('mithril');
Home = require('./home')
About = require('./about')
Floored = require('./floored')

m.route.mode = 'pathname'
m.route(document.body, "/", {
    "/": Home,
    "/about": About,
    "/floored/:section": Floored,
});
