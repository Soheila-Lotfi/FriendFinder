var express = require("express");
var path = resuire("path");

// make an instance of express

var app = express();

// port of the app
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// make the server ready to start

app.listen(PORT, function() {
  console.log("the server listening on: " + PORT);
});
