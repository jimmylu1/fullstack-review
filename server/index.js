//server
const express = require("express");
let app = express();
const getRepos = require("../helpers/github.js");
const db = require("../database/index.js");

let bodyParser = require("body-parser");

app.use(express.static(__dirname + "/../client/dist"));
app.use(express.urlencoded({ extended: false }));

app.post("/repos", function(req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log(req.body, "server post works");
  getRepos.getReposByUsername(req.body.term, data => {
    for (let key in data) {
      db.save(data[key]);
    }
  });
  res.writeHead(200);
  res.end();
});

app.get("/repos", function(req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.sortRepos((err, data) => {
    if (err) {
      console.log("Error in index server: ", err);
    } else {
      console.log("DATA LIVING IN SERVER", data);
      res.send(data);
      res.end();
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
