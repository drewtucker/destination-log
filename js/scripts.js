function Place (location, landmark, time, notes, grade) {
  this.location = location;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
  this.grade = grade;
}


// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedLocation = $("input#newLocation").val();
    var inputtedLandmark = $("input#newLandmark").val();
    var inputtedTime = $("input#newTime").val();
    var inputtedNotes = $("input#newNotes").val();
    var inputtedGrade = $("input#newGrade").val();

    var newPlace = new Place(inputtedLocation, inputtedLandmark, inputtedTime, inputtedNotes, inputtedGrade);



    $("ul#destinations").append("<li><span class='destination'>" + newPlace.location + "</span></li>");
    $(".destination").last().click(function() {
      $("#show-destination").show();
      $("#show-destination h2").text(newPlace.location);
      $(".location").text(newPlace.location);
      $(".landmark").text(newPlace.landmark);
      $(".time").text(newPlace.time);
      $(".notes").text(newPlace.notes);
      $(".grade").text(newPlace.grade);
    });

    $("input#newLocation").val("");
    $("input#newLandmark").val("");
    $("input#newTime").val("");
    $("input#newNotes").val("");
    $("input#newGrade").val("");
  });
});
