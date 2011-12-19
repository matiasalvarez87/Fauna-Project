define([
  'jquery',
  'underscore',
  'backbone',
  'models/content'
], function($, _, Backbone, contentModel){
  var siteManagerContentsCollection = Backbone.Collection.extend({
    model: contentModel,
    initialize: function(){

    }
  });
  return new siteManagerContentsCollection;
});
