// Filename: views/content-repo/list
define([
  'jquery',
  'underscore',
  'backbone',
  'jqueryUI',
  'views/site-manager/listFolders',
  'views/site-manager/listContents',
  'text!templates/siteManagerIndex.html'

], function($, _, Backbone, jqueryUI, listFoldersView, listContentsView, siteManagerIndexTemplate){
  var siteManagerIndexView = Backbone.View.extend({
    el: $("#site-manager"),
    render: function(){
      // this.el.html(siteManagerIndexTemplate); // it doesn't work, research it
	  $("#site-manager").html(siteManagerIndexTemplate);
	  
	  // Appends the nested views
	  this.appendFolderListView();
	  this.appendContentListView();
	  
	  // Sets up the accordion component
	  $('#siteManager-accordion').accordion();
    },
	appendFolderListView: function() {
		this.foldersListView = listFoldersView;
		this.foldersListView.parentView = this;
		listFoldersView.render();
	},
	appendContentListView: function() {
		this.contentsListView = listContentsView;
		this.contentsListView.parentView = this;
		listContentsView.render();
	}
  });
  return new siteManagerIndexView;
});
