m = require('mithril');
Home = require('./home')
About = require('./about')
Blog = require('./blog')
Floored = require('./floored')

m.route.mode = 'pathname'
m.route(document.body, "/", {
    "/": Home
});
