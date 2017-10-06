var eatenBurgers = require('../data/eatenBurgers');
var newBurgers = require('../data/newBurgers');

module.exports = function (app) {
  // This route handles the request of the home page
  app.get("/", function (req, res) {
    var theObject = {choices:{new:newBurgers,
      done:eatenBurgers}};
      console.log(theObject);
    res.render("index",theObject);
  });



  // this route handles the creation of new bugers
  app.post("/newburger", function (req, res) {
    var newPush = {
      burgerName:req.body.createdBurger,
      id: newBurgers.length+1
   }
    newBurgers.push(newPush)
    res.redirect("/");
  });


 

 // this route handles deletion of burgers 
  app.post("/eatburger/:id", function (req, res) {
   for (var i = 0; i < newBurgers.length; i++) {
if (newBurgers[i].burgerName == req.body.burgerName){
  newBurgers.splice(i,1)
}
     
   }
 console.log(newBurgers);
    
    var newPush = {
      burgerName:req.body.burgerName,
      id: req.params.id
   }
   eatenBurgers.push(newPush);
    res.redirect("/");
  });


};
