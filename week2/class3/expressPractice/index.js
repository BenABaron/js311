const express = require('express')
const bodyParser = require("body-parser")
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('lesson1.db', function(error){
  if (error) {
    console.error("Failed to connect to db");
    console.error(error.message);
  } else {
    console.log("Connected to db");
  }
})

const app = express()
app.use(bodyParser.json()); // this allows express to use body parser
const port = process.env.PORT || 4000

const { users } = require('./state')

/* BEGIN - create routes here */
app.all("/", function(req, res){
  res.send(`
  This backend can manage users using the following:
  GET /users                  get the list of all users
  GET /users/{id}             get a specific user by id
  PUT /users/{id}             update an existing user by id
  POST /users                 add a new user
  DELETE /users{id}           delete a user
  `);
});

app.get('/testdb', function(req, res){
  console.log("inside my GET /testdb route")

  // some code in here to issue this command to the database
  //  and return the results

  let sql = 'SELECT * from users';

  db.each(sql, function(error, row){
    console.log("Result from the db = ", row);
  })

  res.json("success!")
})

app.get('/users', function(req, res){
  console.log("inside my GET /users route");

  console.log("current users: ", users);

  res.json(users);
})

// make a route, that returns the user with id 1
// GET /users/1
app.get("/users/1", function(req, res){
  console.log("inside my /users/1 route");

  res.json(users[0]);

})

app.get("/users/:id", function(req, res){
  console.log("inside my GET /users/:id route ", req.params);
  
  let idToLookFor = req.params.id;

  let user = users.find(function(element){
    if (element._id == idToLookFor) {
      return element;
    }
  })

  res.json(user);

})

let nextUserId = 1;
users.forEach(function(user){
  if(nextUserId <= user._id){
    nextUserId = user._id+1;
  }
})

// POST /users
app.post("/users", function(req, res){
  console.log("inside my POST /users route");
  console.log("request body: ", req.body);

  // HOMEWORK:
  // add an _id attribute
  // add the user sent to the database (state.js)

  // read in the data and assign an id to the user
  req.body._id = nextUserId;

  // increment the variable holding the next id so when we add the next user, they don't get the same id
  nextUserId++;

  users.push(req.body);
  res.send("success!");

})

// PUT /users/:id
app.put("/users/:id", function(req, res){
  console.log("inside my PUT /users/:id route ", req.params);
  console.log("request body: ", req.body);

  // HOMEWORK:
  // update an existing user element
  // NOTE!! make sure that if an id attribute is added in the body that you replace it with the id from the route!

  let idToLookFor = req.params.id;

  let user = users.find(function(element){
    if (element._id == idToLookFor) {
      return element;
    }
  })

  if (req.body.name) {
    user.name = req.body.name;
  }

  if (req.body.occupation) {
    user.occupation = req.body.occupation;
  }

  if (req.body.id) {
    user._id = req.body.id;
  }

  res.send("success!");

})

// DELETE /users/:id
app.delete("/users/:id", function(req, res){
  console.log("inside my DELETE /users/ route ", req.params);

  // HOMEWORK:
  // for the user with the matching id, add an "active" attribute and set it to false
  let idToLookFor = req.params.id;

  let user = users.find(function(element){
    if (element._id == idToLookFor) {
      return element;
    }
  })

  user.isActive = false;

  res.send("success!");

})

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))