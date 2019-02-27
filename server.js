// Dependencies
// ===========================================================
var express = require("express");

// Express configuration
// ===========================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route Files
// ===========================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log("Listening on http://localhost:" + PORT);
});