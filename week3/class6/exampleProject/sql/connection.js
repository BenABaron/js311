let sqlite3 = require("sqlite3");

let connection = new sqlite3.Database("./app.db", 
        sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, function(error){
  if (error){
    console.error("Failed to make a connection to the database. Error: ", error);
  } else {
    console.log("Connection to db established");
    setupDB();
  }
})

let createItemsTable = `
CREATE TABLE IF NOT EXISTS items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name varchar NOT NULL,
  status varchar
);
`

let setupDB = function(){
  console.log("Setting up db");
  connection.exec(createItemsTable, function(error){
    if (error) {
      console.error("Failed when setting up database. Error: ", error)
    } else {
      console.log("Initializing db...");
    }
  })
}

module.exports = connection;