define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var folderModel = Backbone.Model.extend({
    defaults: {
      name: 'Folder Name',
	  innerFolders: 0,
	  innerContents: 0,
	  lastUpdated: '18/12/2011 23:35:03'
    },
    initialize: function(){
    }

  });
  return folderModel;
});
