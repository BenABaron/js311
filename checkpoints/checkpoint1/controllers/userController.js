const connection = require("../sql/connection");

let getAll = function(req, res){
  console.log("Inside my getAll route");
  
  let getStmt = "SELECT * FROM users";

  connection.query(getStmt, function(error, rows){
    if (error) {
      console.error("Error getting all users. Error: ", error);
      res.sendStatus(500);
    } 

    console.log(rows);
    res.json(rows);
  })
}

let getUser = function(req, res){
  console.log("Inside my getUser route ", req.params);
  res.send("success!");
}

let addUser = function(req, res){
  console.log("Inside my addUser route ", req.body);
  res.send("success!");
}

let editUser = function(req, res){
  console.log("Inside my editUser route ", req.body);
  res.send("success!");
}

let deleteUser = function(req, res){
  console.log("Inside my deleteUser route ", req.params);
  res.send("success!");
}

module.exports = {getAll, getUser, addUser, editUser, deleteUser};