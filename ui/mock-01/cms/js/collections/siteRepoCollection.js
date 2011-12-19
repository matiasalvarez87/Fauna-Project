define([
  'jquery',
  'underscore',
  'backbone',
  'models/content'
], function($, _, Backbone, contentModel){
  var siteRepoCollection = Backbone.Collection.extend({
    model: contentModel,
    initialize: function(){

    }
  });
  return new siteRepoCollection;
});
