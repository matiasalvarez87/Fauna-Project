// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/master',
  'views/site-manager/index',
  'views/site-repo/list',
  'views/content-repo/list'
  
], function($, _, Backbone, masterView, siteManagerListView, siteRepoListView, contentRepoListView ){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
	  'site-manager': 'showSiteManager',
	  'site-repo': 'showSiteRepo',
	  'content-repo': 'showContentRepo',

      // Default
      '*actions': 'showSiteManager'
    },
	
	// The constructor of the Router is used to load the master view
	initialize: function() {
		masterView.render();
	},
	
	// Handlers
	showSiteManager: function() {
		siteManagerListView.render();
	},
	
	showSiteRepo: function() {
		siteRepoListView.render();
	},
	
	showContentRepo: function() {
		contentRepoListView.render();
	},
	
	// Default handler
    defaultAction: function(actions){
      // We have no matching route
      this.showSiteManager();
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
