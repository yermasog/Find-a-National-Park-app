$(".submit-button").on("click", function (event) {
  event.preventDefault();
  $(this).attr("disabled", true);
  $(this).val("submitted");

  var searchterm = $(this).attr("id")
  var queryURL = "https://developer.nps.gov/api/v1/parks?stateCode=" + searchterm
    + "&api_key=ntIG3OA71FDbXqFK26t4ABXRfYhcgtL8l5nJ9z8N";
    

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){parkCreation(response)})

  var section = $(".posts-list");
  var stateDiv = $("<h1>");
  var state = $(this).attr("value");
  stateDiv.text(state)
  section.append(stateDiv);

  async function parkCreation (response) {
  

    for (let i = 0; i < (response.total); i++) {
      console.log(response.data) 
      var photo = response.data[(0 + i)].images[0].url;
      
      var name = response.data[(0 + i)].fullName;
      var description = response.data[(0 + i)].description;
      var url = response.data[(0 + i)].directionsUrl;

   
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
      
      section.append(bigDiv);
      

      var weatherCard = $("<div class='weather-card'>");
      var columnDiv = $("<div class='small-4 columns'>");
      var cardDiv = $("<div class='card card-body'>");
      var cardDivider = $("<div class='card-weather card-divider'>");
      var currentWeather = $("<h6>");
      var image = $("<img>")
      var cardSection = $("<div class='card-section'>");
      var temperature = $("<p>")
      var currentConditions = $("<p>");

      currentWeather.text("Current Weather Conditions:")
      currentWeather.css('font-weight', 'bold');
      
      cardSection.append(temperature);
      cardSection.append(image);
      cardSection.append(currentConditions);
      cardDivider.append(currentWeather);
      cardDiv.append(cardDivider);
      cardDiv.append(cardSection);
      columnDiv.append(cardDiv);
      weatherCard.append(columnDiv);
      bigDiv.append(weatherCard);

     
      var lat = response.data[(0 + i)].latitude;
      var lon = response.data[(0 + i)].longitude;

      var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=18687cf1c7c1d78e93e8472d225dee33&units=imperial"
      await $.ajax({
        url: weatherURL,
        method: "GET"
      }).then(function (weather) {
        

        var temp = weather.main.temp.toFixed()
        var icon = weather.weather[0].icon
        var dailyicon = "https://openweathermap.org/img/w/" + icon + ".png"
        var weatherDes = weather.weather[0].description
      

        currentConditions.text(weatherDes);
        temperature.text("Temperature: " + temp + " °F");
        image.attr("src", dailyicon);



      })

    }

  }

})