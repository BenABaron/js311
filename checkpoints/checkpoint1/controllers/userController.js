const connection = require("../sql/connection");

let getAll = function(req, res){
  console.log("Inside my getAll route");
  
  let getStmt = "SELECT * FROM users";

  connection.query(getStmt, function(error, rows){
    if (error) {
      console.error("Error retreiving all users. Error: ", error);
      res.sendStatus(500);
    } 

    console.log(rows);
    res.json(rows);
  })
}

let getUser = function(req, res){
  console.log("Inside my getUser route ", req.params);

  let idToLookFor = req.params.id;

  if (idToLookFor) {
    let getStmt = "SELECT * FROM users WHERE id = ?";
    let params = [];
    params.push(idToLookFor);
    
    connection.query(getStmt, params, function(error, row){
      if (error) {
        console.error("Error retreiving user by id. Error: ", error);
        res.sendStatus(500);
      }

      console.log(row);
      res.json(row);
    })

  }
}

let addUser = function(req, res){
  console.log("Inside my addUser route ", req.body);
  
  let name = req.body.name;
  let username = req.body.username;

  if (req.body) {
    let addStmt = "INSERT into users values (id, ?, ?)";
    let params = [];
    params.push(name);
    params.push(username);

    connection.query(addStmt, params, function(error){
      if (error) {
        console.error("Error adding new user. Error: ", error);
        res.sendStatus(500);
      }

      res.send("successfully added new user!");
    })
  }
}

let editUser = function(req, res){
  console.log("Inside my editUser route ", req.params, req.body);

  let idToLookFor = req.params.id;

  let newId = req.body.id;
  let name = req.body.name;
  let username = req.body.username;


  if (idToLookFor) {
    let editStmt = "UPDATE users SET id = ?, name = ?, username = ? WHERE id = ?"
    let params = [];
    if (newId) {
      params.push(newId);
    } else {
      params.push(idToLookFor);
    }
    params.push(name);
    params.push(username);
    params.push(idToLookFor);

    console.log(params);

    connection.query(editStmt, params, function(error){
      if (error) {
        console.error("Error editing user by id. Error: ", error);
        res.sendStatus(500);
      }

      res.send("successfully edited user by id!");
    })

  }
}

let deleteUser = function(req, res){
  console.log("Inside my deleteUser route ", req.params);
  
  let idToDelete = req.params.id;

  if (idToDelete) {
    let deleteStmt = "DELETE FROM users WHERE id = ?";
    let params = [];
    params.push(idToDelete);

    connection.query(deleteStmt, params, function(error){
      if (error) {
        console.error("Error deleting user by id. Error: ", error);
        res.sendStatus(500);
      }

      res.send("successfully deleted user by id!")
    })
  }
}

module.exports = {getAll, getUser, addUser, editUser, deleteUser};