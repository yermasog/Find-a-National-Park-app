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





$("#test-button").on("click", function(event) {
  event.preventDefault();
  var searchterm = ["MN", "WI", "SD", "ND"] ;
  var queryURL = "https://developer.nps.gov/api/v1/parks?stateCode=" + searchterm 
+ "&api_key=ntIG3OA71FDbXqFK26t4ABXRfYhcgtL8l5nJ9z8N";

  var settings = {
    async: true,
    crossDomain: true,
    url: queryURL,
    method: "GET",
    success: function(response){
      console.log(response);
    }

  }

  $.ajax(settings).then(function(response){
      console.log(response);

      var park1 = $("#park1");
      park1.text(response.data[3].fullName);
      $("#park1").append(park1)
      console.log("LOOK!!!");
      console.log(response.data);




})

// true|false for state switches
// if/else on click event checking for toggles
// if true return state results from array (data[0]) for loop
// MN array 3 9 13 16
// WI array 0 4 14 
//  ND array 2 6 15
// SD array 1 5 8 11 17

})