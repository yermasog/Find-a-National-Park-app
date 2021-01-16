// var searchterm = "yellowstone";
// var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + searchterm 
// + "&api_key=ntIG3OA71FDbXqFK26t4ABXRfYhcgtL8l5nJ9z8N";

// $("testbtn").on("click", function(){
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//       }).then(function(response){
//         console.log(response);})
// })


// Minnesota

$(".button").on("click", function (event) {
  event.preventDefault();
  var searchterm = $(this).attr("id")
  var queryURL = "https://developer.nps.gov/api/v1/parks?stateCode=" + searchterm
    + "&api_key=ntIG3OA71FDbXqFK26t4ABXRfYhcgtL8l5nJ9z8N";

  var settings = {
    async: true,
    crossDomain: true,
    url: queryURL,
    method: "GET",
    success: function (response) {
      // console.log(response);
    }
  }
  $.ajax(settings).then(function (response) {
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
      var bigDiv = $("<div class='post-item'>");
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
    }
  })

})

// Wisconsin

$("#wiSwitch").on("click", function (event) {
  event.preventDefault();
  var searchterm = ["WI"];
  var queryURL = "https://developer.nps.gov/api/v1/parks?stateCode=" + searchterm
    + "&api_key=ntIG3OA71FDbXqFK26t4ABXRfYhcgtL8l5nJ9z8N";

  var settings = {
    async: true,
    crossDomain: true,
    url: queryURL,
    method: "GET",
    success: function (response) {
      console.log(response);
    }
  }
  $.ajax(settings).then(function (response) {
    console.log(response);

    var park1 = $("#park1");
    park1.text(response.data[3].fullName);
    $("#park1").append(park1)
    console.log("LOOK!!!");
    console.log(response.data);

  })

})

// North Dakota

$("#ndSwitch").on("click", function (event) {
  event.preventDefault();
  var searchterm = ["ND"];
  var queryURL = "https://developer.nps.gov/api/v1/parks?stateCode=" + searchterm
    + "&api_key=ntIG3OA71FDbXqFK26t4ABXRfYhcgtL8l5nJ9z8N";

  var settings = {
    async: true,
    crossDomain: true,
    url: queryURL,
    method: "GET",
    success: function (response) {
      console.log(response);
    }
  }
  $.ajax(settings).then(function (response) {
    console.log(response);

    var park1 = $("#park1");
    park1.text(response.data[3].fullName);
    $("#park1").append(park1)
    console.log("LOOK!!!");
    console.log(response.data);

  })

})

// South Dakota

$("#sdSwitch").on("click", function (event) {
  event.preventDefault();
  var searchterm = ["SD"];
  var queryURL = "https://developer.nps.gov/api/v1/parks?stateCode=" + searchterm
    + "&api_key=ntIG3OA71FDbXqFK26t4ABXRfYhcgtL8l5nJ9z8N";

  var settings = {
    async: true,
    crossDomain: true,
    url: queryURL,
    method: "GET",
    success: function (response) {
      console.log(response);
    }
  }
  $.ajax(settings).then(function (response) {
    console.log(response);

    var park1 = $("#park1");
    park1.text(response.data[3].fullName);
    $("#park1").append(park1)
    console.log("LOOK!!!");
    console.log(response.data);

  })

})


// true|false for state switches
// if/else on click event checking for toggles
// if true return state results from array (data[0]) for loop
// MN array 3 9 13 16
// WI array 0 4 14 
//  ND array 2 6 15
// SD array 1 5 8 11 17