const express = require("express");
const router = express.Router();
const controller = require("../controllers/itemController");

// GET returns the list of the items in my database
router.get("/items", controller.list);

// GET returns the specified item in my database
router.get("/items/:id", controller.get);

// POST should add an item to my database
router.post("/items", controller.create);

// PUT should update an item in my database
router.put("/items/:id", controller.update);

// DELETE should delete an item from my database
router.delete("/items/:id", controller.remove);

module.exports = router;