var searchterm = "boating";
var queryURL = "https://developer.nps.gov/api/v1/activities/parks?q" + searchterm 
+ "&api_key=ntIG3OA71FDbXqFK26t4ABXRfYhcgtL8l5nJ9z8N";

$("#submit").toggle(function(){
    alert(works);
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
        console.log(response);})
})

// $('#switch-toggle-all [data-toggle-all]' ).click(function () {
//     $( '#switch-toggle-all input[type="checkbox"]').prop('checked', this.checked)
//   })
  