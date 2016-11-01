/*
  Please add all Javascript code to this file.
*/



$(document).ready(function () {
		
	var mashableURL = 'https://accesscontrolalloworiginall.herokuapp.com/http://mashable.com/stories.json'


	$.get(mashableURL, function(results) {

		var source = $('#news-template').html();

		var template = Handlebars.compile(source);

		var newsTemplate = template(results['new']);

		$('#news-output').append(newsTemplate);

	}); // end get


}); //end ready