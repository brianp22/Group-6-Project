$(document).ready(function () {
  $('.ui.sticky')
    .sticky({
      context: '#example1'
    })
    ;

  $('.ui.accordion')
    .accordion()
    ;


  ///Alex Edits 1/8/2020

 
  var testAddress1 = "5217+Ridge+Avenue+Philadelphia,PA";

  // var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + alexander1 + "&destinations=" + destinationvariable + "&key=" + APIKey
  $("#searchButton").on("click", function() {
    console.log("button works");
    var APIKey = "AIzaSyCK-KjOG3ByKBQXY9ZLDK-S2Vrj1TkQwWw";
    var userInput = $("#userSearch").val();
    var queryURL = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + userInput + "&inputtype=textquery&key=%20" + APIKey;
    if (window.location.hostname === "localhost" || window.location.hostname === "") {
      queryURL = "https://cors-anywhere.herokuapp.com/" + queryURL;
    };
    $.ajax({
      url: queryURL,
      method: "GET",
    })
      // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {
      console.log(response.predictions[0].place_id)
      var userOrigin = response.predictions[0].place_id;
      $("#googleMapHolder").html("<iframe id='georgeclooney' width='600' height='450' frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/directions?key=AIzaSyCK-KjOG3ByKBQXY9ZLDK-S2Vrj1TkQwWw&origin=" + userInput + "&destination=3401+Grays+Ferry+Ave+Philadelphia,PA' allowfullscreen></iframe>")
    })
  });

  // $("#userSearchButton").on("click", function () {
  //   console.log(window.location.hostname)
  //   userInput = $("#userSearch").val();
  //   var queryURL2 = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + userInput + "&inputtype=textquery&key=%20" + APIKey;
  //   if (window.location.hostname === "localhost" || window.location.hostname === "") {
  //     console.log(window.location.hostname)
  //     queryURL2 = "https://cors-anywhere.herokuapp.com/" + queryURL2;
  //   }

  //   $.ajax({
  //     url: queryURL2,
  //     method: "GET",

  //   })
  //     // We store all of the retrieved data inside of an object called "response"
  //     .then(function (response) {

  //       console.log(response)
  //       console.log(queryURL2)
  //       console.log(response.predictions[0].place_id)
  //       console.log(userInput);
  //       var userLocation = response.predictions[0].place_id;


  //     })



  // })


})