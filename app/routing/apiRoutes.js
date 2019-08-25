var personData = require("../data/friends.js");

// api routes

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(personData);
  });

  // app.post("api/friends", function(req,res){

  //     personData=req.body.
  // })
};
