const express = require('express');
const router = express.Router();
const controller = require("../controllers/userController");

// GET return all users
router.get('/users', controller.getAll);

// GET a user that matches the id
router.get('/users/:id', controller.getUser);

// POST add new user to our db
router.post('/users', controller.addUser);

// PUT edit a user on our db
router.put('/users/:id', controller.editUser);

// DELETE delete a user from our db
router.delete('/users/:id', controller.deleteUser)

// export everything back to index.js
module.exports = router;