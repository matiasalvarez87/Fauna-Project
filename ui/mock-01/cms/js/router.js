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
	  'site-manager/:type': 'showSiteManager',
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
	showSiteManager: function(type) {

		this.selectTab('site-manager');
		siteManagerListView.render();
		
		// Opens the contents view
		if (type == 'contents') {
			siteManagerListView.showAccordionPanel('contents');
		}
	},
	
	showSiteRepo: function() {
		this.selectTab('site-repo');
		siteRepoListView.render();
	},
	
	showContentRepo: function() {
		this.selectTab('content-repo');
		contentRepoListView.render();
	},
	
	// Default handler
    defaultAction: function(actions){
      // We have no matching route
      this.showSiteManager();
    },
	
	selectTab: function(tabName) {
		$('#tabs').tabs('select', tabName);
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
