const express = require('express');
const bodyParser = require('body-parser');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

const app = express();

app.use(bodyParser.json());

app.get('/get', (req, res) => {
  console.log("inside /get GET route")
  res.send("success!")
});

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

app.use(jwtCheck);


app.get('/getAuth', jwtCheck, (req, res) => {
  console.log("inside /getAuth GET route")
  res.send("success!")
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});