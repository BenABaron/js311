const express = require('express');

const router = express.Router();
const commentsController = require("../controllers/commentsCtrl");

router.get("/comments", commentsController.list);

// POST /comments
// DATA: json representation of the contact
// adds a new comment to the comments array

router.post("/comments", commentsController.create);

// GET /comments/:id
// returns a single contact with the matching id

router.get("/comments/:id", commentsController.show)

module.exports = router;