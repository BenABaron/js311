const express = require("express");
const router = express.Router();
const controller = require("../controllers/itemController");

router.get("/items", controller.list);

module.exports = router;