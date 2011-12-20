// Filename: views/master
define([
  'jquery',
  'underscore',
  'backbone',
  'jqueryUI',
  'text!templates/master.html'

], function($, _, Backbone, jqueryUI, masterTemplate){

  var masterView = Backbone.View.extend({
    el: $("#page"),
	
	events: {
		'tabsshow': 'showTab'
	},
	
    render: function(){
      this.el.html(masterTemplate);
	  $('#tabs').tabs();
    },
	
	// Method called when the event 'tabsshow' is triggered
	showTab: function(event, ui) {
		window.location.hash = '#' + ui.panel.id;
	}
	
  });
  
  // Singleton View
  return new masterView;
});
