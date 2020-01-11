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

  $("#searchButton").on("click", function () {
    console.log("button works");
    var APIKey = "AIzaSyCK-KjOG3ByKBQXY9ZLDK-S2Vrj1TkQwWw";
    var userInput = $("#cityNameSearch").val();
    var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" + userInput + "&inputtype=textquery&key=%20" + APIKey;
    // if (window.location.hostname === "localhost" || window.location.hostname === "") {
    //   queryURL = "https://cors-anywhere.herokuapp.com/" + queryURL;
    // };
    $.ajax({
      url: queryURL,
      method: "GET",
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function (response) {
        console.log(response.predictions[0].place_id)
        $("#googleMapHolder").html("<iframe id='georgeclooney' width='100%' height='450' frameborder='0' style='border:0' src='https://www.google.com/maps/embed/v1/directions?key=AIzaSyCK-KjOG3ByKBQXY9ZLDK-S2Vrj1TkQwWw&origin=" + userInput + "&destination=3401+Grays+Ferry+Ave+Philadelphia,PA&zoom=8' allowfullscreen></iframe>")
      })
    weatherAPI();

    fiveDay();
  });

  //BRIAN EDITS

  function weatherAPI() {
    var APIKey = "e378b03ce903b1e79e273ad6019d8a90";
    var location = "Philadelphia"
    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial&appid=" + APIKey;
    // We then created an AJAX call
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      var temp = response.main.temp;
      var temp = temp.toFixed(0);
      var currentWeather = response.weather[0].id;
      var currentConditions = response.weather[0].main;

      console.log(currentWeather);
      console.log(response);
      console.log(queryURL);

      if (currentWeather === 200) {
        var currentWeather = "Thunderstorm with light rain -- a rain jacket will do just fine!";
      } else if (currentWeather === 201) {
        var currentWeather = "Thunderstorm with rain -- bring an umbrella and expect some traffic!"
      } else if (currentWeather === 202) {
        var currentWeather = "Thunderstorm with heavy rain -- grab your rain boots and drive safely!"
      } else if (currentWeather === 210) {
        var currentWeather = "Just a little heat lightning is all..."
      } else if (currentWeather === 211) {
        var currentWeather = "It's a thunderstorm out there -- keep your eyes on the road!"
      } else if (currentWeather === 212) {
        var currentWeather = "Heavy thunderstorm -- make sure your dog has some company!"
      } else if (currentWeather === 221) {
        var currentWeather = "Thunderstorm and swirling clouds -- it's looking like the end of the world out here!"
      } else if (currentWeather === 230) {
        var currentWeather = "Thunderstorm with light drizzle -- ehhhh you're fine!"
      } else if (currentWeather === 231) {
        var currentWeather = "Thunderstorm with drizzle -- a rain jacket will do just fine!"
      } else if (currentWeather === 232) {
        var currentWeather = "Thunderstorm with heavy drizzle -- grab your umbrella watch out for slick roads!"
      } else if (currentWeather === 300) {
        var currentWeather = "Just a little drizzle!"
      } else if (currentWeather === 301) {
        var currentWeather = "It's drizzling out there -- grab your rain jacket!"
      } else if (currentWeather === 302) {
        var currentWeather = "Heavy drizzle out there -- slow down on your sharp turns!"
      } else if (currentWeather === 310) {
        var currentWeather = "Just a little drizzle!"
      } else if (currentWeather === 311) {
        var currentWeather = "It's drizzling out there -- grab your rain jacket!"
      } else if (currentWeather === 312) {
        var currentWeather = "'I wanna know, have you ever seen the rain?'"
      } else if (currentWeather === 313) {
        var currentWeather = "'I wanna know, have you ever seen the rain?'"
      } else if (currentWeather === 314) {
        var currentWeather = "'I wanna know, have you ever seen the rain?'"
      } else if (currentWeather === 321) {
        var currentWeather = "'I wanna know, have you ever seen the rain?'"
      } else if (currentWeather === 500) {
        var currentWeather = "Just a little rain -- you'll be alright!"
      } else if (currentWeather === 501) {
        var currentWeather = "It's raining out there -- grab an umbrella!"
      } else if (currentWeather === 502) {
        var currentWeather = "It's coming down out there -- grab your rain boots!"
      } else if (currentWeather === 503) {
        var currentWeather = "It's coming down out there -- grab your rain boots!"
      } else if (currentWeather === 504) {
        var currentWeather = "Extreme rain -- be very careful!"
      } else if (currentWeather === 511) {
        var currentWeather = "Freezing rain -- drive slowly and watch out for other cars!"
      } else if (currentWeather === 520) {
        var currentWeather = "'I wanna know, have you ever seen the rain?'"
      } else if (currentWeather === 521) {
        var currentWeather = "It's raining out there -- grab an umbrella!"
      } else if (currentWeather === 522) {
        var currentWeather = "It's coming down out there -- grab your rain boots!"
      } else if (currentWeather === 531) {
        var currentWeather = "Rain with swirling clouds -- looks ominous out there!"
      } else if (currentWeather === 600) {
        var currentWeather = "Light snow fall -- visibility may be a little worse that normal!"
      } else if (currentWeather === 601) {
        var currentWeather = "It's snowing! But you have class anyway! Be Careful!"
      } else if (currentWeather === 602) {
        var currentWeather = "Heavy snow -- be careful and check to make sure class isn't cancelled... just kidding ;)"
      } else if (currentWeather === 611) {
        var currentWeather = "It's sleeting out... I don't really know what sleet is! But be careful!"
      } else if (currentWeather === 612) {
        var currentWeather = "Light sleet! Be careful while driving!"
      } else if (currentWeather === 613) {
        var currentWeather = "It's sleeing out there -- Yuck! Be careful!"
      } else if (currentWeather === 615) {
        var currentWeather = "Light wintry mix... everybody's favorite!  Be careful!"
      } else if (currentWeather === 616) {
        var currentWeather = "Wintry mix... everybody's favorite! Be careful!"
      } else if (currentWeather === 620) {
        var currentWeather = "Light snow fall -- visibility may be a little worse that normal!"
      } else if (currentWeather === 621) {
        var currentWeather = "It's snowing! But you have class anyway! Be Careful!"
      } else if (currentWeather === 622) {
        var currentWeather = "Heavy snow -- be careful and check to make sure class isn't cancelled... just kidding ;)"
      } else if (currentWeather === 701) {
        var currentWeather = "It's misty out there, be careful!"
      } else if (currentWeather === 711) {
        var currentWeather = "Umm... there is smoke in the air... call the fire department!"
      } else if (currentWeather === 721) {
        var currentWeather = "Haze... where are we, LA?"
      } else if (currentWeather === 731) {
        var currentWeather = "Dusty like your grandparents attic."
      } else if (currentWeather === 741) {
        var currentWeather = "Turn them fog lights on and keep your eyes peeled!"
      } else if (currentWeather === 751) {
        var currentWeather = "Watch out for the sand being blown off of the Jersey Shore!"
      } else if (currentWeather === 761) {
        var currentWeather = "It's dusty like the backside of your refrigerator out there!"
      } else if (currentWeather === 762) {
        var currentWeather = "Ash is falling in Philadelphia... time to be concerned!"
      } else if (currentWeather === 771) {
        var currentWeather = "Squall incoming... make sure you have some shelter!"
      } else if (currentWeather === 781) {
        var currentWeather = "Tornado warning... don't stand in any corn fields."
      } else if (currentWeather === 800) {
        var currentWeather = "Clear skies... life is good! Turn the music up!"
      } else if (currentWeather === 801) {
        var currentWeather = "Slightly cloud -- you're in good shape!"
      } else if (currentWeather === 802) {
        var currentWeather = "Scattered clouds -- you're in good shape!"
      } else if (currentWeather === 803) {
        var currentWeather = "Mostly cloudy --  sorry star-gazers!"
      } else if (currentWeather === 804) {
        var currentWeather = "Overcast skies... oh well :("
      }

      $("#temp").text("Temperature: " + temp + " F°");
      $("#weatherConditions").text(currentWeather);
      $("#currentConditions").text(currentConditions);

      //Brittany edits

      function fiveDay() {
        var location = "Philadelphia"
        var brittanyApiKey = "06606e544a946ac567964601f7ed0813";
        var fiveDayQueryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&units=imperial&appid=" + brittanyApiKey;

        $.ajax({
          url: fiveDayQueryURL,
          method: "GET"
        }).then(function (response) {
          console.log("Brian");

          //Day 1
          var iconCode = response.list[0].weather[0].icon;
          var iconURL = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
          $("#tempTwo").text("Temp: " + parseInt(response.list[0].main.temp) + "° F");
          $("#iconTwo").attr("src", iconURL);
          $("#humidTwo").text("Humidity: " + response.list[0].main.humidity + "%");
          $("#weatherIconTwo").attr("src", iconURL);
          //Day 2
          var iconCode = response.list[8].weather[0].icon;
          var iconURL = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
          $("#tempThree").text("Temp: " + parseInt(response.list[8].main.temp) + "° F");
          $("#iconThree").attr("src", iconURL);
          $("#humidThree").text("Humidity: " + response.list[8].main.humidity + "%");
          $("#weatherIconThree").attr("src", iconURL);
          //Day 3
          var iconCode = response.list[16].weather[0].icon;
          var iconURL = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
          $("#tempFour").text("Temp: " + parseInt(response.list[16].main.temp) + "° F");
          $("#iconFour").attr("src", iconURL);
          $("#humidFour").text("Humidity: " + response.list[16].main.humidity + "%");
          $("#weatherIconFour").attr("src", iconURL);
          //Day 4
          var iconCode = response.list[24].weather[0].icon;
          var iconURL = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
          $("#tempFive").text("Temp: " + parseInt(response.list[24].main.temp) + "° F");
          $("#iconFive").attr("src", iconURL);
          $("#humidFive").text("Humidity: " + response.list[24].main.humidity + "%");
          $("#weatherIconFive").attr("src", iconURL);
          //Day 5
          var iconCode = response.list[32].weather[0].icon;
          var iconURL = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
          $("#tempSix").text("Temp: " + parseInt(response.list[32].main.temp) + "° F");
          $("#iconSix").attr("src", iconURL);
          $("#humidSix").text("Humidity: " + response.list[32].main.humidity + "%");
          $("#weatherIconSix").attr("src", iconURL);

          var currentDay = moment().format('MMMM Do, YYYY');
          $('#currentDay').text(currentDay);
          var dayTwo = moment().add(1, 'days').format('l');
          $('#dayOne').text(dayTwo.slice(0, 9));
          var dayThree = moment().add(2, 'days').format('l');
          $('#dayTwo').text(dayThree.slice(0, 9));
          var dayFour = moment().add(3, 'days').format('l');
          $('#dayThree').text(dayFour.slice(0, 9));
          var dayFive = moment().add(4, 'days').format('l');
          $('#dayFour').text(dayFive.slice(0, 9));
          var daySix = moment().add(5, 'days').format('l');
          $('#dayFive').text(daySix.slice(0, 9));

        })
      }
    })
  }
});