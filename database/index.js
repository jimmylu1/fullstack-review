//db
const mongoose = require("mongoose");
const promise = require("bluebird");
//need to check promise import

mongoose
  .connect("mongodb://localhost/fetcher", { useMongoClient: true })
  .then(console.log("MONGOOSE CONNECTED"))
  .catch(err => console.log("mongoose not connected"));

let repoSchema = mongoose.Schema({
  id: { unique: true, type: Number, dropDups: true },
  name: String,
  description: String,
  forks_count: Number
});

let Repo = mongoose.model("Repo", repoSchema);

//need to save data in db
let save = userObj => {
  let data = {
    id: userObj["id"],
    name: userObj["name"],
    description: userObj["description"],
    forks_count: userObj["forcks_count"]
  };

  const newRepo = new Repo(data);
  newRepo.save().then(err => {
    if (err) {
      console.log(err);
    }
  });
};

module.exports.save = save;
