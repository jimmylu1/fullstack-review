const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/fetcher");

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  avatar_url: String,
  fork_count: Number
});

let Repo = mongoose.model("Repo", repoSchema);

let save = userSearch => {};

module.exports.save = save;
