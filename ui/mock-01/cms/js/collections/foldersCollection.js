define([
  'jquery',
  'underscore',
  'backbone',
  'models/folder'
], function($, _, Backbone, folderModel){
  var foldersCollection = Backbone.Collection.extend({
    model: folderModel,
    initialize: function(){

    }
  });
  return new foldersCollection;
});
