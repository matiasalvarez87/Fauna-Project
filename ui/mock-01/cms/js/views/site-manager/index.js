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
	
	/*events: {
		'click a': 'accordionChanged'
		/*'accordionchange #siteManager-accordion': 'accordionChanged',
		'accordioncreate #siteManager-accordion': 'accordionChanged',
		'accordionchangestart #siteManager-accordion': 'accordionChanged'*
	},*/
	
    render: function(){
	
      // this.el.html(siteManagerIndexTemplate); // it doesn't work, research it
	  $("#site-manager").html(siteManagerIndexTemplate);
	  
	  // Appends the nested views
	  this.appendFolderListView();
	  this.appendContentListView();
	  
	  // Sets up the accordion component
	  //$('#siteManager-accordion').accordion().bind('accordionchangestart', this.accordionChanged(event, ui));
	  var opts = {
		change: this.accordionChanged
	  };
	  $('#siteManager-accordion').accordion(opts);
	  //$('#siteManager-accordion').accordion().bind('accordionchangestart', function(event, ui) {alert('event: ' + event + ' - ui: ' + ui);} );
	  /*$('#siteManager-accordion').bind('accordioncreate', function(event, ui) {
			alert('uiii');
	});*/
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
	},
	
	accordionChanged: function(event, ui) {
		window.location.hash = '#' + ui.newHeader.data("url");
	},
	
	// Shows the content accordion panel
	showAccordionPanel: function(accordionPanel) {
	
		if (accordionPanel == 'contents') {
			
			// FIXME: Workaround to avoid the opening animation
			var elId = '#siteManager-accordion',
				opt = 'option',
				optName = 'animated',
				animatedVal = $(elId).accordion(opt, optName);
				
			$(elId).accordion(opt, optName, false);
			$(elId).accordion('activate' , 1);
			$(elId).accordion(opt, optName, animatedVal);
		}
	}
  });
  return new siteManagerIndexView;
});
