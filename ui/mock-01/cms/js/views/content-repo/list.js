// Filename: views/content-repo/list
define([
  'jquery',
  'underscore',
  'backbone',
  'jqueryUI',
  // Pull in the Collection module from above
  'collections/contentRepoCollection',
  'text!templates/contentList.html'

], function($, _, Backbone, jqueryUI, contentsCollection, contentListTemplate){
  var projectListView = Backbone.View.extend({
    el: $("#content-repo"),
    initialize: function(){
      this.collection = contentsCollection;
      this.collection.bind("add", this.exampleBind);
	  this.collection = contentsCollection.add({ name: "Harry Potter", subtitle: "El caliz de fuego", imgPath: 'img/01.jpg'});
	  this.collection = contentsCollection.add({ name: "Due Date", subtitle: "Due date subtitle", imgPath: 'img/02.jpg'});
	  this.collection = contentsCollection.add({ name: "Sherlock Homes", subtitle: "A Game of Shadows", imgPath: 'img/03.jpg'});
	  this.collection = contentsCollection.add({ name: "Extremely Loud", subtitle: "Incredibly Close", imgPath: 'img/04.jpg'});
	  this.collection = contentsCollection.add({ name: "Happy Feet Two", subtitle: "In Antartic", imgPath: 'img/05.jpg'});
	  this.collection = contentsCollection.add({ name: "Joyful Noise", subtitle: "Theatrical Premiere", imgPath: 'img/06.jpg'});
	  this.collection = contentsCollection.add({ name: "Into The Wild", imgPath: 'img/07.jpg'});
	  this.collection = contentsCollection.add({ name: "Batman 2", imgPath: 'img/08.jpg'});
	  this.collection = contentsCollection.add({ name: "Jackass 3D"});
    },
    exampleBind: function( model ){
      //console.log(model);
    },
	
    render: function(){
      var data = {
        contents: this.collection.models,
        _: _
      };
      var compiledTemplate = _.template( contentListTemplate, data );
      $("#content-repo").html( compiledTemplate );
	  
	  // this.renderContentForm();
    },
	
	renderContentForm: function() {
	
		var name = $( "#content-form #name" ),
			subtitle = $( "#content-form #subtitle" ),
			imgPath = $( "#content-form #imgPath" ),
			allFields = $( [] ).add(name).add(subtitle).add(imgPath);
	
		$( "#dialog-form" ).dialog({
			autoOpen: false,
			height: 300,
			width: 350,
			modal: true,
			buttons: {
				"Create content": function() {
					var bValid = true;
					allFields.removeClass( "ui-state-error" );

					if ( bValid ) {
						alert(name);
						/* $( "#users tbody" ).append( "<tr>" +
							"<td>" + name.val() + "</td>" + 
							"<td>" + subtitle.val() + "</td>" + 
							"<td>" + imgPath.val() + "</td>" +
						"</tr>" ); */
						$( this ).dialog( "close" );
					}
				},
				Cancel: function() {
					$(this).dialog( "close" );
				}
			},
			close: function() {
				allFields.val("").removeClass( "ui-state-error" );
			}
		});
		
		$( "#create-content" )
			.button()
			.click(function() {
				$( "#dialog-form" ).dialog( "open" );
			});
		
	}
	
  });
  return new projectListView;
});
