let comments = require("../data/comments");

let nextCommentId = 1;
comments.forEach(function(comment){
  if(nextCommentId <= comment._id){
    nextCommentId = comment._id+1;
  }
})

/**
 * For handling the GET /cantacts
 * @param req the request
 * @param res the response
 */
let list = function(req, res) {
  console.log("Inside the commentsCtrl GET /comments route")
  res.json(comments);
}

/**
 * For handling the POST /comments
 * @param req the request
 * @param res the response
 */
let create = function(req, res) {
  console.log("Inside the commentsCtrl POST /comments route", req.body);

  // read in the data and assign an id to the comment
  req.body._id = nextCommentId;

  // increment the variable holding the next id so when we add the next comment, they don't get the same id
  nextCommentId++;

  comments.push(req.body);
  res.send("success!");
}

/**
 * For handling the GET /comments/:id
 * @param {*} req 
 * @param {*} res 
 */
let show = function(req, res) {
  console.log("Inside the commentsCtrl GET /comments:id route", req.params);
  
  let idToLookFor = req.params.id;

  let comment = comments.find(function(element){
    if (element._id == idToLookFor) {
      return element;
    }
  })

  res.json(comment);
}

module.exports = {list, show, create};