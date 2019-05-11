const express = require("express");
let app = express();
let { getReposByUsername } = require("../helpers/github.js");

let bodyParser = require("body-parser");

app.use(express.static(__dirname + "/../client/dist"));

app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.post("/repos", function(req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log(req.body);
  console.log("SERVER POST WORKS");
});

app.get("/repos", function(req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log("success");
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
