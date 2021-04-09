let sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("../app.db", sqlite3.OPEN_READWRITE, function(){
  console.log("connected to db")
});



let list = function(req, res){
  console.log("Inside the list function");
  res.send("success!");
}

module.exports = {list};