var eatenBurgers = require('../data/eatenBurgers');
var newBurgers = require('../data/newBurgers')
module.exports = function (app){
   app.get("/api/newburgers", function(req, res) {
      res.json(newBurgers);
    });

    app.get("/api/eatenburgers", function(req, res) {
      res.json(eatenBurgers);
    });
   
   }