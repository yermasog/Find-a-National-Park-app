var searchterm = "yellowstone";
var queryURL = "https://developer.nps.gov/api/v1/parks?parkCode=" + searchterm 
+ "&api_key=ntIG3OA71FDbXqFK26t4ABXRfYhcgtL8l5nJ9z8N";

$("testbtn").on("click", function(){
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
        console.log(response);})
})