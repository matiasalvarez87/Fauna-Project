define([
  'jquery',
  'underscore',
  'backbone',
  'models/content'
], function($, _, Backbone, contentModel){
  var contentRepoCollection = Backbone.Collection.extend({
    model: contentModel,
    initialize: function(){

    }
  });
  return new contentRepoCollection;
});
