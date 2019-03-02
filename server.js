// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");

// Express configuration
// ===========================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// app.use('/static', express.static(path.join(__dirname + 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// app.use('/images',express.static(path.join(__dirname, 'public/images')));
// app.use('/javascript',express.static(path.join(__dirname, 'public/javascripts')));
// app.use('/css',express.static(path.join(__dirname, 'public/css')));



// Route Files
// ===========================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log("Listening on http://localhost:" + PORT);
});