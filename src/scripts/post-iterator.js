var PostList = {}

var Post = function(data) {
  var data = data || {};
  this.id = m.prop(data.id);
  this.title = m.prop(data.title);
  this.content = m.prop(data.content);
}

Post.list = function() {
  // get all the posts
}

PostList.List = Array
