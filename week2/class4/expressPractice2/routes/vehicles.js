const express = require('express');

const router = express.Router();
const vehiclesController = require("../controllers/vehiclesCtrl");



// GET /vehicles
// returns all the vehicles

router.get("/vehicles", vehiclesController.list);

// POST /vehicles
// DATA: json representation of the contact
// adds a new contact to the vehicles array

router.post("/vehicles", vehiclesController.create);

// GET /vehicles/:id
// returns a single contact with the matching id

router.get("/vehicles/:id", vehiclesController.show)

module.exports = router;