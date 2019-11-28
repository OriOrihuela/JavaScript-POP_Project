// We need to import certain functionalities.
var express = require("express");
var app = express();

/**
 * Set the port of our application
 * process.env.PORT lets the port be set by Heroku
 */
var port = process.env.PORT || 8080;

// Make express look in the public directory for assets (css/js/img/html).
app.use(express.static(__dirname + "/dist"));

// Set the home page route.
app.get("/", function(request, response) {
  // ejs render automatically looks in the views folder
  response.render("index");
});

// Just a console to check that everything is running under control.
app.listen(port, function() {
  console.log("Our app is running on http://localhost:" + port);
});
