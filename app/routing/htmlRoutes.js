// Dependencies
// ===========================================================
var path = require("path");


// Routing
// ===========================================================
module.exports = (app) => {
  app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/survey.html"));
  });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/home.html"));
  })
};