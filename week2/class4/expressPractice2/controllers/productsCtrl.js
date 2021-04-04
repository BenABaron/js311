let products = require("../data/products");

// loop through all the products,
// make a variable to hold the id of the next product when we create it

let nextProductId = 1;
products.forEach(function(product){
  if(nextProductId <= product._id){
    nextProductId = product._id+1;
  }
})

/**
 * For handling the GET /cantacts
 * @param req the request
 * @param res the response
 */
let list = function(req, res) {
  console.log("Inside the productsCtrl GET /products route")
  res.json(products);
}

/**
 * For handling the POST /products
 * @param req the request
 * @param res the response
 */
let create = function(req, res) {
  console.log("Inside the productsCtrl POST /products route", req.body);

  // read in the data and assign an id to the product
  req.body._id = nextProductId;

  // increment the variable holding the next id so when we add the next product, they don't get the same id
  nextProductId++;

  products.push(req.body);
  res.send("success!");
}

/**
 * For handling the GET /products/:id
 * @param {*} req 
 * @param {*} res 
 */
let show = function(req, res) {
  console.log("Inside the productsCtrl GET /products:id route", req.params);
  
  let idToLookFor = req.params.id;

  let product = products.find(function(element){
    if (element._id == idToLookFor) {
      return element;
    }
  })

  res.json(product);
}

module.exports = {list, show, create};