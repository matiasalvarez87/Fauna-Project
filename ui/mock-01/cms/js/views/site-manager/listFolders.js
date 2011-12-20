// Filename: views/content-repo/list
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/foldersCollection',
  'text!templates/folderList.html'

], function($, _, Backbone, foldersCollection, folderListTemplate){

  var projectListView = Backbone.View.extend({
  
    el: $("#siteManager-folders"),
	
    initialize: function(){
      this.collection = foldersCollection;
      this.collection.bind("add", this.exampleBind);
	  this.collection = foldersCollection.add({name: 'Root Folder Site 1', innerFolders: 12, innerContents: 2});
	  this.collection = foldersCollection.add({name: 'Folder A', innerFolders: 4, innerContents: 23});
	  this.collection = foldersCollection.add({name: 'WarnerBros.com', innerFolders: 2, innerContents: 9});
	  this.collection = foldersCollection.add({name: 'Site Test', innerContents: 17});
	  this.collection = foldersCollection.add({name: 'Another Site Test', innerFolders: 21});
    },
	
    exampleBind: function( model ){
      //console.log(model);
    },
	
    render: function(){
      var data = {
        folders: this.collection.models,
		breadcrumb: ['root', 'folder 1', 'current folder', 'my folder'],
        _: _
      };
      var compiledTemplate = _.template( folderListTemplate, data );
      $("#siteManager-folders").html( compiledTemplate );
    }
	
  });
  return new projectListView;
});
