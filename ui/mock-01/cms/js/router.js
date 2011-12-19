// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/site-manager/index',
  'views/site-repo/list',
  'views/content-repo/list'
], function($, _, Backbone, siteManagerListView, siteRepoListView, contentRepoListView ){
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Define some URL routes
	  'site-manager': 'showSiteManager',
	  'site-repo': 'showSiteRepo',
	  'content-repo': 'showContentRepo',

      // Default
      '*actions': 'showSiteManager'
    },
	showSiteManager: function() {
		siteManagerListView.render();
	},
	showSiteRepo: function() {
		siteRepoListView.render();
	},
	showContentRepo: function() {
		contentRepoListView.render();
	},
    defaultAction: function(actions){
      // We have no matching route
      showSiteManager();
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
