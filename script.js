$(document).ready(function() {
	// API URL and API key
	var apiUrl = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey = "cd8107966bd4572b4024a6e4adaf8f81"; // replace with your OpenWeatherMap API key

	// Event listener for search button
	$("#search").click(function() {
		var location = $("#location").val();
		if (location != '') {
			$.ajax({
				url: apiUrl,
				dataType: "json",
				type: "GET",
				data: {
					q: location,
					appid: apiKey,
					units: "metric"
				},
				success: function(data) {
					var weather = "";
					weather += "<p><strong>Location:</strong> " + data.name + ", " + data.sys.country + "</p>";
					weather += "<p><strong>Temperature:</strong> " + data.main.temp + " &deg;C</p>";
					weather += "<p><strong>Description:</strong> " + data.weather[0].description + "</p>";
					$("#weather").html(weather);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					alert("Error: " + textStatus);
				}
			});
		} else {
			alert("Please enter a location");
		}
	});
});

