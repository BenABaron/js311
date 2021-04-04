const express = require('express');

const router = express.Router();
const productsController = require("../controllers/productsCtrl");



// GET /products
// returns all the products

router.get("/products", productsController.list);

// POST /products
// DATA: json representation of the product
// adds a new product to the products array

router.post("/products", productsController.create);

// GET /products/:id
// returns a single product with the matching id

router.get("/products/:id", productsController.show)

module.exports = router;