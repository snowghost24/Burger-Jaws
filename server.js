// require dependendencies
var express = require('express');
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var path = require("path");

// ────────────────────────────────────────────────────────────────────────────────

var app = express();
var PORT = process.env.PORT || 3010;
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// Here the server is requiring this file which is a unanimous function
// and passing in the variale app


 require("./routes/apiRoutes")(app);
 require("./routes/htmlRoutes")(app);



app.listen(PORT, function() {
   console.log("App listening on PORT " + PORT);
 });