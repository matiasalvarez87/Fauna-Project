define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var contentModel = Backbone.Model.extend({
    defaults: {
      name: 'Content Name',
	  lastUpdated: '18/12/2011',
	  subtitle: 'Content subtitle',
	  imgPath: 'img/content-01.png'
    },
    initialize: function(){
    }

  });
  return contentModel;
});
