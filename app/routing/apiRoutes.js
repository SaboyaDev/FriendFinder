// Load Data sources
// ===========================================================
var friendsArray = require("../data/friends.js");


// Routing
// ===========================================================
module.exports = (app) => {
  app.get("/api/friends", (req, res) => {
    res.json(friendsArray);
  });

  app.post("/api/friends", (req, res) => {
    // Push new entry to our friendsArray
    friendsArray.push(req.body);
    // Defining our variables
    var user1Scores = req.body.scores
    var bestMatchDiff= 0;
    var keys = Object.keys(friendsArray);
    var diffArray = [];
    var bestIndexArray = [];
    
    // It Compares the recent user's answer agains our friends Array
    // Tries to match with the user/s with the least amount of difference between the questions
    checkBestMatches(keys, user1Scores, diffArray);

    // Obtains the lowest value difference in the difference Array
    bestMatchDiff = Math.min(...diffArray);

    // Checks the the difference Array to see if that value repeats
    // Then obtains the index which matches with a User's index position in the friends array
    getAllMatchinIndexes(diffArray, bestMatchDiff, bestIndexArray);

    // Returns the best match/es 
    returnBestMatches(bestIndexArray, friendsArray);
    
  });
};

// It Compares the recent user's answer agains our friends Array
// Tries to match with the user/s with the least amount of difference between the questions
function checkBestMatches(keys, user1Scores, diffArray) {
  for (var i = 0; i < (keys.length - 1); i++) {
    var user2Scores = friendsArray[keys[i]].scores;
    var totalDiff = 0;
    for (var j = 0; j < user2Scores.length; j++) {
      var diffOfQuestions = 0;
      if (user2Scores[j] > user1Scores[j]) {
        diffOfQuestions = user2Scores[j] - user1Scores[j];
      } else {
        diffOfQuestions = user1Scores[j] - user2Scores[j];
      }
      totalDiff += diffOfQuestions;
    }
    diffArray.push(totalDiff);
  }
}

// Checks the the difference Array to see if that value repeats
// Then obtains the index which matches with a User's index position in the friends array
function getAllMatchinIndexes(diffArray, bestMatchDiff, bestIndexArray) {
  for (var i = 0; i < diffArray.length; i++) {
    if (diffArray[i] === bestMatchDiff) {
      bestIndexArray.push(i);
    }
  }
}

// Returns the best match/es 
function returnBestMatches(bestIndexArray, friendsArray) {
  for (var g = 0; g < bestIndexArray.length; g++) {
    var index = bestIndexArray[g];
    console.log("Name: " + friendsArray[index].name);
  }
}


