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
	
    render: function(){
      this.el.html(masterTemplate);
	  $('#tabs').tabs();
    }
	
  });
  
  // Singleton View
  return new masterView;
});
