const express = require('express');

const router = express.Router();
const contactsController = require("../controllers/contactsCtrl");



// GET /contacts
// returns all the contacts

router.get("/contacts", contactsController.list);

// POST /contacts
// DATA: json representation of the contact
// adds a new contact to the contacts array

router.post("/contacts", contactsController.create);

// GET /contacts/:id
// returns a single contact with the matching id

router.get("/contacts:id", contactsController.show)

module.exports = router;