var personData = require("../data/friends.js");

// api routes

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(personData);
  });

  app.post("/api/friends", function(req, res) {
    var newData = req.body;
    var total = [];
    var index;
    for (i = 0; i < personData.length; i++) {
      var totalScore = 0;
      for (j = 0; j < personData[i].scores.length; j++) {
        totalScore += Math.abs(
          parseInt(personData[i].scores[j]) - parseInt(newData.scores[j])
        );
      }
      total.push(totalScore);
    }
    var min = Number.POSITIVE_INFINITY;

    for (i = 0; i < total.length; i++) {
      if (total[i] < min) {
        min = total[i];
        index = i;
      }
    }
    personData.push(newData);
    res.json(personData[index]);
  });
};
