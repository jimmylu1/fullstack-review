//db
const mongoose = require("mongoose");
Promise = require("bluebird");
mongoose.Promise = Promise;
//need to check promise import

mongoose
  .connect("mongodb://localhost/fetcher", { useMongoClient: true })
  .then(console.log("MONGOOSE CONNECTED"))
  .catch(err => console.log("mongoose not connected"));

let repoSchema = mongoose.Schema({
  id: Number,
  avatar: String,
  name: String,
  description: String
});

let Repo = mongoose.model("Repo", repoSchema);

//need to save data in db
let save = userObj => {
  let data = {
    id: userObj["id"],
    avatar: userObj["owner"]["avatar_url"],
    name: userObj["name"],
    description: userObj["description"]
  };

  const newRepo = new Repo(data);
  newRepo
    .save()
    .then(success => {
      console.log("successs");
    })
    .catch(err => {
      if (err) {
        console.log(err);
      }
    });
};

let sortRepos = cb => {
  Repo.find()
    .limit(25)
    .then(function(data) {
      cb(null, data);
    })
    .catch(err => {
      console.log("Err in DB: ", err);
    });
};

module.exports.save = save;
module.exports.sortRepos = sortRepos;
