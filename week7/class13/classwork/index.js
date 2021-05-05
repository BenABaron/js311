const express = require('express');
const bodyParser = require('body-parser');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

const app = express();

app.use(bodyParser.json());

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-fxv2g8r3.us.auth0.com/.well-known/jwks.json'
}),
audience: 'https://authTest',
issuer: 'https://dev-fxv2g8r3.us.auth0.com/',
algorithms: ['RS256']
});

app.get('/everyone', (req, res) => {
  console.log("inside /everyone GET route")
  res.json("Everyone can")
});

check1 = function(req, res, next){
  console.log("inside the check1 JWT middleware function");

  /**
   * we can write some code that checks if this user is authenticated
   */
  
  let randomNumber = Math.random();
  console.log("Random number = ", randomNumber);
  if (randomNumber > .5) {
    next();
  } else {
    res.status(404).send("The random number was " + randomNumber);
  }

};

check2 = function(req, res, next){
  console.log("inside the check2 JWT middleware function");
  next();
};


/**
 * 
 * Returns a success message that inclued the username based on the JWT Token
 * This path is only available to authenticated users
 * 
 * GET /authOnly
 */
app.get('/authOnly', jwtCheck, (req, res) => {
  console.log("inside /authOnly GET route")
  res.json("Only the special people can, we see you as " + req.username);
});

app.listen(4001, () => {
  console.log("listening on port 4001");
});