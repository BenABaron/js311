const express = require('express')
const bodyParser = require("body-parser")
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

// POST /users
app.post("/users", function(req, res){
  console.log("inside my POST /users route");
  console.log("request body: ", req.body);

  res.json(null);

  // HOMEWORK:
  // add an _id attribute
  // add the user sent to the database (state.js)

})

// PUT /users/:id
app.put("/users/:id", function(req, res){
  console.log("inside my PUT /users/:id route ", req.params);
  console.log("request body: ", req.body);

  res.json(null);

  // HOMEWORK:
  // update an existing user element
  // NOTE!! make sure that if an id attribute is added in the body that you replace it with the id from the route!

})

// DELETE /users/:id
app.delete("/users/", function(req, res){
  console.log("inside my DELETE /users/ route ", req.params);

  res.json(null);

  // HOMEWORK:
  // for the user with the matching id, add an "active" attribute and set it to false

})

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))