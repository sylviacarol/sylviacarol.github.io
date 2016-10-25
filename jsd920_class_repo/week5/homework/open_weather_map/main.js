/*
Open Weather Map Instructions:

1)
- Use either $.ajax or $.get to GET the current weather data for New York City
- Use the API docs to figure out how to properly structure the weatherUrl below (http://openweathermap.org/current)
	- Hint: search the docs for "city name"
- Be sure to include in the weatherUrl the option to receive data in your units of choice (imperial, metric, etc.)
	- Hint: search the docs for "units format"
- First, print the response to the console, then, using the API's response, print the following data to #nyc-weather:
	- The current "temp"
	- The current "humidity"
	- The current wind "speed"

2)
- Add a form to to the index.html page that allows the user to enter a city and a state
- Capture this form's submit event and dynamically create the weatherUrl below from the user's input
- Print this result to the DOM

3) Bonus:
- Change the background color based on the temperature; ie colder temps should be blue, and hotter temps red

4) Intermediate Bonus:
- Implement handlebars.js templates :)

5) Legendary Bonus:
- Sign up for the flicker API: https://www.flickr.com/services/api/
- Use the flicker search photo library: https://www.flickr.com/services/api/flickr.photos.search.html
- Hint: you will have to convert the responses from the search API into images: https://www.flickr.com/services/api/misc.urls.html
- Instead of changing the background color based on temperature, change the background to first result the flicker API returns for the city
- Ex: user enters "Brooklyn" - search flicker API for "Brooklyn" and use the first image


http://openweathermap.org/current
*/


$(document).ready(function () {
	
//////// 1)

	var apiKey = '5dd2b0638ed32a2f8a08c734d118e79d';
	var weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';
	var weatherNYC = 'http://api.openweathermap.org/data/2.5/weather?q=newyork&units=imperial&APPID=5dd2b0638ed32a2f8a08c734d118e79d'


	$.get(weatherNYC, function(response) {
		console.log(response.name);

		var temperature = response.main.temp;
		var humidity = response.main.humidity;
		var wind = response.wind.speed;

		console.log(temperature + ", " + humidity + ", " + wind );

		$('#nyc-weather-output')
			.append('<p>Temperature: ' + temperature + '</p>')
			.append('<p>Humidity: ' + humidity + '</p>')
			.append('<p>Wind Speed: ' + wind + '</p>');
	});


//////// 2)

	$('#weather-form').submit(function (event) {

		event.preventDefault();
		var city = $('#city').val();
  		var state = $('#state').val();		

  		$.ajax({
  			url: weatherUrl + city + ',' + state,
  			type: 'GET',
  			success: function (response) {
  				// pipe AJAX reponse to outside function for cleaner code
  				outputWeather(response);
  				console.log(response);
  			},
  			error: function (xhr) {
  				console.log(xhr);
  			}
  		});
	
	});

	function outputWeather (response) {
  		console.log(response);

  		var city = response.name;
  		var temp = response.main.temp;
  		var humidity = response.main.humidity;
  		var wind = response.wind.speed;

  		// change background color
  		//colorBackground(temp);


  		//how to do this when outputting with handlebars instead of jQuery?
  		///$('#weather-output').empty(); // be sure to clear out any data from previous searches!
  		

		//handlebars.js
		var template = Handlebars.compile($('#weather-template').html());

		// create an object to pass into the template; use the variables above
		var weatherObj = {
			city: city,
			temp: temp,
			humidity: humidity,
			wind: wind
		}

		console.log(weatherObj);

		$('#weather-output').append(template(weatherObj));
  	}


  	// Bonus - change background color based on temperature
  	function colorBackground (temp) {
  		if (temp > 70) {
  			$('body').css('background', 'red');
  		} else {
  			$('body').css('background', 'blue');
  		}
  	}




}); //end ready
