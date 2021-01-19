$(".submit-button").on("click", function (event) {
  // alert("testing")
  event.preventDefault();
  $(this).attr("disabled", true);
  $(this).val("submitted");

  var searchterm = $(this).attr("id")
  var queryURL = "https://developer.nps.gov/api/v1/parks?stateCode=" + searchterm
    + "&api_key=ntIG3OA71FDbXqFK26t4ABXRfYhcgtL8l5nJ9z8N";
console.log(queryURL)
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){parkCreation(response)})

  async function parkCreation (response) {
    console.log(response);

    for (let i = 0; i < (response.total); i++) {

      var photo = response.data[(0 + i)].images[0].url;
      var name = response.data[(0 + i)].fullName;
      var description = response.data[(0 + i)].description;
      var url = response.data[(0 + i)].directionsUrl;

      // console.log(name)
      // console.log(description)
      // console.log(url)
      // console.log(photo)
      // var panel = $("<div class='panel-content'>");
      var section = $(".posts-list");
      var bigDiv = $("<div class='post-item flex-container fullwidth'>");
      var photoDiv = $("<a class='post-thumbnail'>")
      var imageTag = $("<img>")
      var postText = $("<div class='post-text'>")
      var postTitle = $("<h3 class='post-title'>")
      var postSummaryDiv = $("<div class='post-summary'>")
      var postSummaryP = $("<p>")
      var link = $("<a class='post-read-more'>")

      link.attr("href", url);
      link.text("Learn More");
      postSummaryP.text(description);
      postTitle.text(name);
      imageTag.attr('src', photo);

      postSummaryP.append(link);
      postSummaryDiv.append(postSummaryP);
      postText.append(postTitle);
      photoDiv.append(imageTag);
      bigDiv.append(photoDiv);
      postText.append(postSummaryDiv);
      bigDiv.append(postText);
      //append everything to the main div
      section.append(bigDiv);
      // panel.append(section);

      // var flex = $("<div class ='post-item flex-container fullwidth'>")
      var weatherCard = $("<div class='weather-card'>");
      var columnDiv = $("<div class='small-4 columns'>");
      var cardDiv = $("<div class='card'>");
      var cardDivider = $("<div class='card-divider'>");
      var currentWeather = $("<h6>");
      var image = $("<img>")
      var cardSection = $("<div class='card-section'>");
      var temperature = $("<p>")
      var currentConditions = $("<p>");

      currentWeather.text("Current Weather Conditions:")
      currentWeather.css('font-weight', 'bold');
      cardDiv.css('width', '300px');
      cardDiv.append(image);
      cardSection.append(temperature);
      cardSection.append(currentConditions);
      cardDivider.append(currentWeather);
      cardDiv.append(cardDivider);
      cardDiv.append(cardSection);
      columnDiv.append(cardDiv);
      weatherCard.append(columnDiv);
      bigDiv.append(weatherCard);

      // use the lat and lon from NPS API to feed into open weather API to get weather info
      var lat = response.data[(0 + i)].latitude;
      var lon = response.data[(0 + i)].longitude;

      var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=18687cf1c7c1d78e93e8472d225dee33&units=imperial"
      await $.ajax({
        url: weatherURL,
        method: "GET"
      }).then(function (weather) {
        console.log(weather)

        var temp = weather.main.temp
        var icon = weather.weather[0].icon
        var dailyicon = "https://openweathermap.org/img/w/" + icon + ".png"
        var weatherDes = weather.weather[0].description
        console.log(temp)
        console.log(icon)
        console.log(dailyicon)
        console.log(weatherDes);

        currentConditions.text(weatherDes);
        temperature.text("Temperature: " + temp + " °F");
        image.attr("src", dailyicon);



      })

    }

  }

})