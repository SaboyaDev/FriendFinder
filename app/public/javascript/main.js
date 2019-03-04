$(".submitBtn").on("click", function (event) {
  event.preventDefault();
  collectUserInput(scores);
  clearValueInputs();
});

function collectUserInput(scores) {
  var scores = [];
  for (var i = 1; i <= 10; i++) {
    scores.push($("#q" + i).val())
  }
  var userData = {
    name: $("#name").val(),
    photo: $("#img").val(),
    scores: scores
  };
  postUserData(userData);
}

function postUserData(userData) {
  // AJAX post the data to the friends API.
  $.post("/api/friends", userData, function (data) {
    // Grab the result from the AJAX post so that the best match's name and photo are displayed.
    $("#match-name").text(data.name);
    $("#match-img").attr("src", data.photo);
    for (var i = 0; i < data.length; i++) {
      var matchName = data[i].name;
      var matchPhoto = data[i].photo;
      // building the modal
      $(".modal-body")
        .append("<p>" + matchName + "</p>");
      $(".modal-body")
        .append($("<img>")
          .attr("src", matchPhoto)
          .css({
            height: "150px",
            width: "100px",
            "margin-bottom": "30px"
          }));
      // displays the results in the modal
      $("#show-results-modal").modal("toggle");
    }
  });
}

function clearValueInputs() {
  $("#name").val("");
  $("#img").val("");
  for (var i = 1; i <= 10; i++) {
    $("#q" + i).val("");
  }
}