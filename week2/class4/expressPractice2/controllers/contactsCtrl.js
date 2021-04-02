let contacts = require("../data/contacts");

// loop through all the contacts,
// make a variable to hold the id of the next contact when we create it

let nextContactId = 1;
contacts.forEach(function(contact){
  if(nextContactId <= contact._id){
    nextContactId = contact._id+1;
  }
})

/**
 * For handling the GET /cantacts
 * @param req the request
 * @param res the response
 */
let list = function(req, res) {
  console.log("Inside the contactsCtrl GET /contacts route")
  res.json(contacts);
}

/**
 * For handling the POST /contacts
 * @param req the request
 * @param res the response
 */
let create = function(req, res) {
  console.log("Inside the contactsCtrl POST /contacts route", req.body);

  // read in the data and assign an id to the contact
  req.body._id = nextContactId;

  // increment the variable holding the next id so when we add the next contact, they don't get the same id
  nextContactId++;

  contacts.push(req.body);
  res.send("success!");
}

/**
 * For handling the GET /contacts/:id
 * @param {*} req 
 * @param {*} res 
 */
let show = function(req, res) {
  // get a contact by id
}

module.exports = {list, show, create};