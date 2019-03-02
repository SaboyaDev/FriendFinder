$("#submit").on("click", function (event) {

  event.preventDefault();

  var userData = {
    name: $("#name").val(),
    photo: $("#img").val(),
    scores: [
      $("#q1").val(),
      $("#q2").val(),
      $("#q3").val(),
      $("#q4").val(),
      $("#q5").val(),
      $("#q6").val(),
      $("#q7").val(),
      $("#q8").val(),
      $("#q9").val(),
      $("#q10").val()
    ]
  };
  // AJAX post the data to the friends API.
  $.post("/api/friends", userData, function (data) {


    // // Grab the result from the AJAX post so that the best match's name and photo are displayed.
    // $("#match-name").text(data.name);
    // // $("#match-img").attr("src", data.photo);
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].name);
      var matchName = data[i].name;
      var matchPhoto = data[i].photo;
      console.log(matchPhoto);

      $(".modal-body").append("<p>" + matchName + "</p>");
      $(".modal-body").append($("<img>").attr("src", matchPhoto).css({
        height: "150px",
        width: "100px"
      }));
    }

    $("#show-results-modal").modal("toggle");


    $("#name").val("");
    $("#img").val("");
  });

});