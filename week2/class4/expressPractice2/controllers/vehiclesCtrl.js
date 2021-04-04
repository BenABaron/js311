let vehicles = require("../data/vehicles");

// loop through all the vehicles,
// make a variable to hold the id of the next vehicle when we create it

let nextVehicleId = 1;
vehicles.forEach(function(vehicle){
  if(nextVehicleId <= vehicle._id){
    nextVehicleId = vehicle._id+1;
  }
})

/**
 * For handling the GET /cantacts
 * @param req the request
 * @param res the response
 */
let list = function(req, res) {
  console.log("Inside the vehiclesCtrl GET /vehicles route")
  res.json(vehicles);
}

/**
 * For handling the POST /vehicles
 * @param req the request
 * @param res the response
 */
let create = function(req, res) {
  console.log("Inside the vehiclesCtrl POST /vehicles route", req.body);

  // read in the data and assign an id to the vehicle
  req.body._id = nextVehicleId;

  // increment the variable holding the next id so when we add the next vehicle, they don't get the same id
  nextVehicleId++;

  vehicles.push(req.body);
  res.send("success!");
}

/**
 * For handling the GET /vehicles/:id
 * @param {*} req 
 * @param {*} res 
 */
let show = function(req, res) {
  console.log("Inside the vehiclesCtrl GET /vehicles:id route", req.params);
  
  let idToLookFor = req.params.id;

  let vehicle = vehicles.find(function(element){
    if (element._id == idToLookFor) {
      return element;
    }
  })

  res.json(vehicle);
}

module.exports = {list, show, create};