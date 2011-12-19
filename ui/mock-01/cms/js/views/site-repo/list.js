// Filename: views/content-repo/list
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/siteRepoCollection',
  'text!templates/contentList.html'

], function($, _, Backbone, contentsCollection, contentListTemplate){
  var projectListView = Backbone.View.extend({
    el: $("#site-repo"),
    initialize: function(){
      this.collection = contentsCollection;
      this.collection.bind("add", this.exampleBind);
	  this.collection = contentsCollection.add({ name: "Harry Potter", subtitle: "El caliz de fuego", imgPath: 'img/01.jpg'});
	  this.collection = contentsCollection.add({ name: "Due Date", subtitle: "Due date subtitle", imgPath: 'img/02.jpg'});
	  this.collection = contentsCollection.add({ name: "Into The Wild", imgPath: 'img/07.jpg'});
	  this.collection = contentsCollection.add({ name: "Batman 2", imgPath: 'img/08.jpg'});
	  this.collection = contentsCollection.add({ name: "Jackass 3D"});
    },
    exampleBind: function( model ){
      //console.log(model);
    },
    render: function(){
      var data = {
        contents: this.collection.models,
        _: _
      };
      var compiledTemplate = _.template( contentListTemplate, data );
      $("#site-repo").html( compiledTemplate );
    }
  });
  return new projectListView;
});
