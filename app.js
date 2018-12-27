const PORT = 3000;
var express = require('express');
var GameManager = require('./gameManager');
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

gameManager = new GameManager();

app.get('/', function (req, res) {
  console.log("GET request on path " + req.path);
  res.render("home", {});
});

app.get('/new', function (req, res) {
  console.log("GET request on path " + req.path);
  res.render("new");
});

app.listen(PORT, function () {
  console.log("Running on port " + PORT);
});
