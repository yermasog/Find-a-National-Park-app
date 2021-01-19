$("#allBtn").on("click", function(){
  
})






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
  }).then(function (response) {
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

      // use the lat and lon from NPS API to feed into open weather API to get weather info
      var lat = response.data[0].latitude;
      var lon = response.data[0].longitude;

      var weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=18687cf1c7c1d78e93e8472d225dee33&units=imperial"
      $.ajax({
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

      
        var weatherCard = $("<div class='weather-card'>");
        var columnDiv = $("<div class='small-4 columns'>");
        var cardDiv = $("<div class='card, style=width: 300px'>");
        var cardDivider = $("<div class='card-divider'>");
        var currentWeather = $("<h6>");
        var image = $("<img>") 
        var cardSection = $("<div class='card-section'>");
        var temperature = $("<p>")
        var currentConditions = $("<p>");
      
        currentConditions.text(weatherDes);
        temperature.text("Temperature: " + temp +  " F");
        image.attr(src=dailyicon);

        cardDiv.append(image);
        cardSection.append(currentConditions);
        cardSection.append(temperature);
        cardDiv.append(cardSection);
        cardDiv.append(cardDivider);
        columnDiv.append(cardDiv);
        weatherCard.append(columnDiv);
        bigDiv.append(weatherCard);




      })

    }

  })

})

// jQuery.fn.preventDoubleSubmission = function(){
//   $(this).on("submit", function(event){
//     var $form = $(this);
//     console.log(this);

//     if ($form.data("submitted") === true){
//       event.preventDefault();
//     } else {
//       $form.data("submitted", true);
//     }
//   })

//   return this;
// }
