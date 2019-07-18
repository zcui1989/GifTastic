
debugger;

var cars = [];

function renderButtons() {

$("#buttons-view").empty();

for (var i = 0; i < cars.length; i++) {

    var a = $("<button>");
    a.addClass("car");
    a.attr("data-name", cars[i]);
    a.text(cars[i]);
    $("#buttons-view").append(a);
}
}

$("#add-car").on("click", function(event) {
event.preventDefault();

var car = $("#car-input").val().trim();
cars.push(car);

renderButtons();
});


$("button").on("click", function() {
    // Grabbing and storing the data-animal property value from the button
    var car = $(this).attr("data-car");

    // Constructing a queryURL using the animal name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      car + "&api_key=p876KMuB0UE8byPGQt0Ek9EjdEgo7sVB&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;

        // Looping through each result item
        for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var carDiv = $("<div>");

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>").text("Rating: " + results[i].rating);

          // Creating and storing an image tag
          var carImage = $("<img>");
          // Setting the src attribute of the image to a property pulled off the result item
          carImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and image tag to the animalDiv
          carDiv.append(p);
          carDiv.append(carImage);

          // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
          $("#gifs-appear-here").prepend(carDiv);
        }
      });
  });

renderButtons();






