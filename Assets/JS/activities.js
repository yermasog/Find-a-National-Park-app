
$(".submit-button").on("click", function (event) {
    event.preventDefault();

    var searchterm = $(this).attr("id")
    var searchURL = "https://developer.nps.gov/api/v1/activities/parks?q=" + searchterm + "&sort=state&api_key=ntIG3OA71FDbXqFK26t4ABXRfYhcgtL8l5nJ9z8N"

    $.ajax({
        url: searchURL,
        method: "GET"
    }).then(function (activities) { parkCreation(activities) })


    var section = $(".posts-list");
    var activitiesDiv = $("<h1>");
    var activity = $(this).attr("id");
    activitiesDiv.text(activity)
    section.append(activitiesDiv);

    async function parkCreation(activities) {
        console.log(activities)

        for (let i = 0; i < 15; i++) {

            var parkcode = activities.data[0].parks[i].parkCode
            console.log(parkcode)

            var searchterm = parkcode
            var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + searchterm
                + "&api_key=ntIG3OA71FDbXqFK26t4ABXRfYhcgtL8l5nJ9z8N";

            console.log(queryURL)
            await $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                console.log(response)
                console.log(i)
                var photo = response.data[0].images[0].url;
                console.log(photo)
                var name = response.data[0].fullName;
                var description = response.data[0].description;
                var url = response.data[0].directionsUrl;

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
                // var weatherCard = $("<div class='weather-card'>");
                // var columnDiv = $("<div class='small-4 columns'>");
                // var cardDiv = $("<div class='card'>");
                // var cardDivider = $("<div class='card-divider'>");
                // var currentWeather = $("<h6>");
                // var image = $("<img>")
                // var cardSection = $("<div class='card-section'>");
                // var temperature = $("<p>")
                // var currentConditions = $("<p>");

                // currentWeather.text("Current Weather Conditions:")
                // currentWeather.css('font-weight', 'bold');

                // cardSection.append(temperature);
                // cardSection.append(image);
                // cardSection.append(currentConditions);
                // cardDivider.append(currentWeather);
                // cardDiv.append(cardDivider);
                // cardDiv.append(cardSection);
                // columnDiv.append(cardDiv);
                // weatherCard.append(columnDiv);
                // bigDiv.append(weatherCard);








            }


            )
        }

    }

})

