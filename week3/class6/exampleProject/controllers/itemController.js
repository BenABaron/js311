let connection = require("../sql/connection");



let list = function(req, res){
  console.log("Inside the list function");

  connection.all("SELECT * FROM items", function(error, rows){
    if (error) {
      console.error("Error when fetching data. Error: ", error);
      res.sendStatus(500);
    } else {
    res.json(rows);
    }
  })
}



let get = function(req, res) {
  console.log("Inside the get function ", req.params);

  let idToLookFor = req.params.id;

  if (idToLookFor) {
    let getStmt = "SELECT * FROM items WHERE id = ?";
    let params = [];
    params.push(idToLookFor);

    connection.all(getStmt, params, function(error, row){
      if (error) {
        console.error("Failed to find item. Error: ", error);
        res.sendStatus(500);
      } else {
        res.json(row);
      }
    })
  }
}



let update = function(req, res) {
  console.log("Inside the update function");
  res.send("success!");
}



let create = function(req, res) {
  console.log("Inside the create function ", req.body);

  let itemName = req.body.name;

  if (itemName) {

    // to protect against sql injection, never trust input passed in for the user/client/browser
    // you should always use parameters and parameterized statements
    let insertStmt = `INSERT INTO items (name, status) values ( ? , ? );`
    let params = [];
    params.push(itemName);
    params.push('NOT DONE'); // even though this is safe, still better to use params
  
    connection.run(insertStmt, params, function(error){
      if (error) {
        console.error("Error when inserting data. Error: ", error);
        res.sendStatus(500);
      } else {
        res.send("success!")
      }
    })

  } else {
    console.error("Cannot add an item with no name")
    res.sendStatus(400);
  }
}



let remove = function(req, res) {
  console.log("Inside the delete function ", req.params);

  // the reason it's req.params.id is because the route specifies the name id (/items/:id)
  let idToDelete = req.params.id;

  if (idToDelete) {
    let deleteStmt = "DELETE FROM items WHERE id = ?";
    let params = [];
    params.push(idToDelete);

    connection.run(deleteStmt, params, function(error){
      if (error) {
        console.error("Failed to delete. Error: ", error);
        res.sendStatus(500);
      } else {
        res.send("success!")
      }
    })

  } else {
    console.error("Cannot delete if no id is given");
    res.sendStatus(400);
  }
}

module.exports = {list, get, update, create, remove};