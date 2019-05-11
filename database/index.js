//db
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/fetcher", { useMongoClient: true })
  .then(console.log("MONGOOSE CONNECTED"))
  .catch(err => console.log("mongoose not connected"));

// MongoClient.connect("mongodb://localhost:27017/animals", function(err, db) {
//   if (err) throw err;

//   db.collection("mammals")
//     .find()
//     .toArray(function(err, result) {
//       if (err) throw err;

//       console.log(result);
//     });
// });

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  fork_count: Number
});

let Repo = mongoose.model("Repo", repoSchema);

let save = userObj => {
  let data = {};
};

module.exports.save = save;
